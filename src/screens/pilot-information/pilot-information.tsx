import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { smallCardData as getSmallCardData } from "./components/data";
import PilotInformationHeader from "./components/header";
import StasticSmallCard, {
  StasticSmallCardProps,
} from "./components/statistic-small-card";
import axios from "../../api/axios";
import { DriverStanding, Race, RequestModel } from "../../api/interfaces";
import NationalityInformation from "../../components/detail-information/nationality-information";
import LoadingComponent from "../../components/loading";
import { getCorrectPilotWikiId } from "../../functions/isRedirect";

interface PilotInformaionScreenProps {
  navigation: any;
  route: any;
}

const PilotInformationScreen = ({ navigation, route }: PilotInformaionScreenProps) => {
  const pilot: DriverStanding = route.params?.pilot;

  const pilotWikiId = route.params?.pilotWikiId || "";
  const [correctPilotWikiId, setCorrectPilotWikiId] = useState<string>();

  const [pilotResults, setPilotResults] = useState<RequestModel>();
  const [podiums, setPodiums] = useState<Race[]>([]);
  const [fastestLaps, setFastestLaps] = useState<Race[]>([]);
  const [polePositions, setPolePositions] = useState<Race[]>([]);

  const [isResultsLoading, setIsResultsLoading] = useState<boolean>(false);
  const [isQualifyingLoading, setIsQualifyingLoading] = useState<boolean>(false);

  const statisticCardsData = getSmallCardData(
    pilotResults?.MRData?.RaceTable?.Races?.length.toString() || "",
    pilot.points,
    podiums?.length.toString(),
    pilot.wins,
    polePositions.length.toString(),
    fastestLaps.length.toString(),
  );

  useEffect(() => {
    fetch(
      `https://en.wikipedia.org/w/api.php?action=parse&page=${pilotWikiId}&format=json&prop=wikitext`,
    )
      .then((response) => response.text())
      .then((result) => {
        setCorrectPilotWikiId(
          getCorrectPilotWikiId(pilotWikiId, JSON.parse(result).parse.wikitext["*"]),
        );
      })
      .catch((error) => console.log("error", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsResultsLoading(true);
    axios
      .get(`/current/drivers/${pilot.Driver.driverId}/results.json`)
      .then((response) => {
        const data: RequestModel = response.data;
        setPilotResults(response.data);
        setPodiums(
          data?.MRData.RaceTable?.Races.filter(
            (value) => Number(value.Results?.[0].position) <= 3,
          ) || [],
        );
        setFastestLaps(
          data?.MRData.RaceTable?.Races.filter(
            (value) => Number(value.Results?.[0].FastestLap?.rank) === 1,
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
      .get(`/current/drivers/${pilot.Driver.driverId}/qualifying/1.json`)
      .then((response) => {
        const data: RequestModel = response.data;
        setPolePositions(data.MRData.RaceTable?.Races || []);
        setIsQualifyingLoading(false);
      })
      .catch((err) => {
        console.log("error", err);
        setIsQualifyingLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = (item: { item: StasticSmallCardProps }) => {
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
      {correctPilotWikiId && (
        <>
          <PilotInformationHeader
            navigation={navigation}
            pilotWikiId={correctPilotWikiId}
            pilot={pilot}
          />
          {isResultsLoading || isQualifyingLoading ? (
            <LoadingComponent isLoading={isResultsLoading} />
          ) : (
            <>
              <NationalityInformation
                type="nationality"
                mainText={pilot.Driver.nationality}
                birthday={pilot.Driver.dateOfBirth}
                iconId={pilot.Constructors[0].constructorId}
              />
              <NationalityInformation
                type="constructor"
                mainText={pilot.Constructors[0].name}
                iconId={pilot.Constructors[0].constructorId}
              />
              <FlatList
                data={statisticCardsData}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={(item) => item.title}
              />
            </>
          )}
          {/* {(!isResultsLoading || !isQualifyingLoading) && (
            
          )} */}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#1E1E1E",
  },
  smallCardsContainer: {
    flex: 1,
    height: "100%",
  },
});

export default PilotInformationScreen;
