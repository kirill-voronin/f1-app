import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import axios, { ALL_PILOTS_CHAMPIONS_STANDING } from "../../../../axois/axios";
import { colors } from "../../../../style/colors";
import { MRDataAllWinners, StandingsList } from "../../../../axois/data-all-winners";
import AllWinnersCard from "../../../../components/cards/pilot-all-winners-card";
import ErrorComponent from "../../../../components/error";
import LoadingComponent from "../../../../components/loading";

interface StatisticPilotsChampionshipProps {
  navigation: any;
}

const StatisticPilotsChampionship = ({
  navigation,
}: StatisticPilotsChampionshipProps) => {
  const [champions, setChampions] = useState<StandingsList[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(ALL_PILOTS_CHAMPIONS_STANDING)
      .then((response) => {
        const thisChampions: MRDataAllWinners = response.data;
        setChampions(thisChampions.MRData.StandingsTable.StandingsLists.reverse());
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  const keyExtractor = (item: any) => `shedules-${item.season}`;

  const renderPilotCard = ({ item }: { item: StandingsList }) => {
    const name = `${item.DriverStandings[0].Driver.givenName} ${item.DriverStandings[0].Driver.familyName}`;
    return (
      <AllWinnersCard
        year={item.season}
        driverName={name}
        commandName={item.DriverStandings[0].Constructors[0].name}
        nationality={item.DriverStandings[0].Driver.nationality.replace(" ", "")}
      />
    );
  };

  return (
    <View style={styles.container}>
      {isError && <ErrorComponent color="#fff" />}
      <LoadingComponent isLoading={isLoading} />
      {champions.length !== 0 && (
        <FlatList
          data={champions}
          keyExtractor={keyExtractor}
          renderItem={renderPilotCard}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
});

export default StatisticPilotsChampionship;
