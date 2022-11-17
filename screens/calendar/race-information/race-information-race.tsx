import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import axios from "../../../axois/axios";
import { MRDataRaceResults, Result } from "../../../axois/data-race-results";

import PilotCard from "../../../components/pilot-card";
import { colors } from "../../../style/colors";

interface RaceInfoRaceResultProps {
  route?: any;
}

const RaceInfoRaceResult = ({ route }: RaceInfoRaceResultProps) => {
  const [raceResults, setRaceResutls] = useState<Result[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const round = route.params.round;

  useEffect(() => {
    setIsLoading(true);
    axios.get(`/current/${round}/results.json`).then((response) => {
      const race: MRDataRaceResults = response.data;
      setRaceResutls(race.MRData.RaceTable.Races[0].Results);
      setIsLoading(false);
    });
  }, [round]);

  const renderPilotsCards = () => {
    return (
      <>
        {raceResults.map((result, index) => {
          const name = `${result.Driver.givenName} ${result.Driver.familyName}`;
          return (
            <PilotCard
              key={index}
              position={result.position}
              driverName={name}
              commandName={result.Constructor.name}
              points={result.points}
              nationality={result.Driver.nationality}
              commandId={result.Constructor.constructorId}
            />
          );
        })}
      </>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.isLoadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
      <ScrollView>{renderPilotsCards()}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: colors.secondary,
  },
  isLoadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default RaceInfoRaceResult;
