import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import axios, { ALL_CONSTRUCTORS_CHAMPIONS } from "../../../../axois/axios";
import {
  MRDataConstructorsChampions,
  StandingsList,
} from "../../../../axois/data-all-constructors-champions";
import AllWinnersCard from "../../../../components/cards/pilot-all-winners-card";
import ErrorComponent from "../../../../components/error";
import LoadingComponent from "../../../../components/loading";
import { colors } from "../../../../style/colors";
import ConstructorChampionCard from "../../../../components/cards/constructor-champions";

const StaisticCommandsChampionship = () => {
  const [champions, setChampions] = useState<StandingsList[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(ALL_CONSTRUCTORS_CHAMPIONS)
      .then((response) => {
        const thisChampions: MRDataConstructorsChampions = response.data;
        setChampions(thisChampions.MRData.StandingsTable.StandingsLists.reverse());
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  const keyExtractor = (item: any) => `shedules-${item.season}`;

  const renderConstructorCard = ({ item }: { item: StandingsList }) => {
    return (
      <ConstructorChampionCard
        year={item.season}
        constructorName={item.ConstructorStandings[0].Constructor.name}
        constructorId={item.ConstructorStandings[0].Constructor.constructorId}
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
          renderItem={renderConstructorCard}
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

export default StaisticCommandsChampionship;
