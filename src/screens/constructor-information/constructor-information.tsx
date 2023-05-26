import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import { ConstructorStanding } from "../../axois/data-constructors";
import Header from "../../components/header";
import CommandIcons from "../../icons/constructor-icons/constructors-icons";
import { colors } from "../../style/colors";
import NationalityInformation from "../../components/detail-information/nationality-information";
import { textStyle } from "../../style/style";
import PilotSmallCard from "./helpers/pilot-small-card";
import axios from "../../axois/axios";
import { Driver } from "../../axois/data-pilot-result";
import { smallCardData as getSmallCardData } from "../constructor-information/helpers/data";
import StasticSmallCard, {
  StasticSmallCardProps,
} from "../pilot-information/components/statistic-small-card";
import { MRDataConstructorResults, Race } from "../../axois/data-constructor-results";
import {
  MRDataConstructorQualifying,
  Race as RaceConstructorQualifying,
} from "../../axois/data-constructor-qualifying";

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
  const [polePositions, setPolePositions] = useState<RaceConstructorQualifying[]>([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`current/constructors/${constructor.Constructor.constructorId}/drivers.json`)
        .then((response) => {
          const data: Driver[] = response.data.MRData.DriverTable.Drivers;
          setPilots([...data]);
        });
    };
    getData();
  }, []);

  useEffect(() => {
    axios
      .get(`current/constructors/${constructor.Constructor.constructorId}/results.json`)
      .then((response) => {
        const data: MRDataConstructorResults = response.data;
        setPodiums(0);
        data.MRData.RaceTable.Races.forEach((race) => {
          race.Results.forEach((pilotResult) => {
            if (Number(pilotResult.position) <= 3) setPodiums((prev) => (prev += 1));
          });
        });
        setFastestLaps(
          data?.MRData.RaceTable.Races.filter(
            (value) =>
              Number(value.Results[0].FastestLap?.rank) === 1 ||
              Number(value.Results[1].FastestLap?.rank) === 1
          )
        );
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `/current/constructors/${constructor.Constructor.constructorId}/qualifying.json`
      )
      .then((response) => {
        const data: MRDataConstructorQualifying = response.data;
        setPolePositions(
          data.MRData.RaceTable.Races.filter(
            (value) =>
              Number(value.QualifyingResults[0].position) === 1 ||
              Number(value.QualifyingResults[1].position) === 1
          )
        );
      });
  });

  const statisticCardsData = getSmallCardData(
    constructor.points,
    podiums.toString(),
    constructor.wins,
    polePositions.length.toString(),
    fastestLaps.length.toString()
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
            <CommandIcons
              name={constructor.Constructor.constructorId}
              size="extraLarge"
            />
          </View>
        </View>
        <Text style={styles.constructorName}>{constructor.Constructor.name}</Text>
      </Header>
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
    backgroundColor: colors.lightGrey,
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
