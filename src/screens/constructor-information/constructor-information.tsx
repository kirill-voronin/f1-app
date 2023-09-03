import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";

import PilotSmallCard from "./helpers/pilot-small-card";
import axios from "../../api/axios";
import { ConstructorStanding, Driver, Race, RequestModel } from "../../api/interfaces";
import NationalityInformation from "../../components/detail-information/nationality-information";
import Header from "../../components/header";
import LoadingComponent from "../../components/loading";
import ConstructorIcons from "../../icons/constructor-icons/constructors-icons";
import { colors } from "../../style/colors";
import { textStyle } from "../../style/style";
import { smallCardData as getSmallCardData } from "../constructor-information/helpers/data";
import StasticSmallCard, {
  StasticSmallCardProps,
} from "../pilot-information/components/statistic-small-card";

interface ConstructorInformationScreenProps {
  navigation: any;
  route: any;
}

const ConstructorInformationScreen = ({
  navigation,
  route,
}: ConstructorInformationScreenProps) => {
  const constructor: ConstructorStanding = route.params?.constructor;
  const [pilots, setPilots] = useState<any[]>([]);
  const [podiums, setPodiums] = useState<number>(0);
  const [fastestLaps, setFastestLaps] = useState<Race[]>([]);
  const [polePositions, setPolePositions] = useState<Race[]>([]);

  const [isDriversLoading, setIsDriversLoading] = useState<boolean>(false);
  const [isResultsLoading, setIsResultsLoading] = useState<boolean>(false);
  const [isQualifyingLoading, setIsQualifyingLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsDriversLoading(true);
    const getData = async () => {
      await axios
        .get(`current/constructors/${constructor.Constructor.constructorId}/drivers.json`)
        .then((response) => {
          const data: Driver[] = response.data.MRData.DriverTable.Drivers;
          setPilots([...data]);
          setIsDriversLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setIsDriversLoading(false);
        });
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsResultsLoading(true);
    axios
      .get(`current/constructors/${constructor.Constructor.constructorId}/results.json`)
      .then((response) => {
        const data: RequestModel = response.data;
        setPodiums(0);
        data.MRData.RaceTable?.Races.forEach((race) => {
          race.Results?.forEach((pilotResult) => {
            if (Number(pilotResult.position) <= 3) setPodiums((prev) => (prev += 1));
          });
        });
        setFastestLaps(
          data?.MRData.RaceTable?.Races.filter(
            (value) =>
              Number(value.Results?.[0].FastestLap?.rank) === 1 ||
              Number(value.Results?.[1].FastestLap?.rank) === 1,
          ) || [],
        );
        setIsResultsLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        setIsResultsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsQualifyingLoading(true);
    axios
      .get(
        `/current/constructors/${constructor.Constructor.constructorId}/qualifying.json`,
      )
      .then((response) => {
        const data: RequestModel = response.data;
        setPolePositions(
          data.MRData.RaceTable?.Races.filter(
            (value) =>
              Number(value.QualifyingResults?.[0].position) === 1 ||
              Number(value.QualifyingResults?.[1].position) === 1,
          ) || [],
        );
        setIsQualifyingLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsQualifyingLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const statisticCardsData = getSmallCardData(
    constructor.points,
    podiums.toString(),
    constructor.wins,
    polePositions.length.toString(),
    fastestLaps.length.toString(),
  );

  const renderItem = (item: { item: Driver }) => {
    const cardProps = item.item;
    return (
      <PilotSmallCard
        code={cardProps.code}
        pilotUri={cardProps.url}
        number={cardProps.permanentNumber}
      />
    );
  };

  const renderStatisticSmallCards = (item: { item: StasticSmallCardProps }) => {
    const cardProps = item.item;
    return (
      <StasticSmallCard
        title={cardProps.title}
        data={cardProps.data}
        icon={cardProps.icon}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header title={"Конструктор"} withBackButton navigtion={navigation}>
        <View style={styles.imageContainer}>
          <View style={styles.constructorLogo}>
            <ConstructorIcons
              name={constructor.Constructor.constructorId}
              size="extraLarge"
            />
          </View>
        </View>
        <Text style={styles.constructorName}>{constructor.Constructor.name}</Text>
      </Header>
      {isDriversLoading || isQualifyingLoading || isResultsLoading ? (
        <LoadingComponent
          isLoading={isDriversLoading || isQualifyingLoading || isResultsLoading}
        />
      ) : (
        <ScrollView>
          <NationalityInformation
            type="nationality"
            mainText={constructor.Constructor.nationality}
            iconId={constructor.Constructor.nationality}
          />
          <Text style={textStyle.headerWhite}>Пилоты</Text>
          <FlatList
            data={pilots}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item) => item.code}
            scrollEnabled={false}
          />
          <Text style={textStyle.headerWhite}>Статистика сезона</Text>
          <FlatList
            data={statisticCardsData}
            numColumns={2}
            renderItem={renderStatisticSmallCards}
            keyExtractor={(item) => item.title}
            scrollEnabled={false}
            columnWrapperStyle={styles.row}
            style={{ marginBottom: 10 }}
          />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  imageContainer: {
    top: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 25,
    elevation: 4,
  },
  constructorLogo: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 15,
    borderColor: colors.black,
    borderWidth: 2,
  },
  constructorName: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 24,
    color: colors.white,
    fontWeight: "700",
  },
  row: {
    justifyContent: "space-around",
  },
});

export default ConstructorInformationScreen;
