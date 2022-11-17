import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import axios from "../../../axois/axios";
import {
  MRDataQualifyingResults,
  QualifyingResult,
} from "../../../axois/data-qualifying";
import PilotCard from "../../../components/pilot-card";
import { colors } from "../../../style/colors";

interface RaceInfoQualifyingProps {
  route?: any;
}

const RaceInfoQualifying = ({ route }: RaceInfoQualifyingProps) => {
  const [qualifyingResults, setQualifyingResutls] = useState<QualifyingResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const round = route.params.round;

  useEffect(() => {
    setIsLoading(true);
    axios.get(`/current/${round}/qualifying.json`).then((response) => {
      const qualifying: MRDataQualifyingResults = response.data;
      setQualifyingResutls(qualifying.MRData.RaceTable.Races[0].QualifyingResults);
      setIsLoading(false);
    });
  }, [round]);

  const renderPilotsCards = () => {
    return (
      <>
        {qualifyingResults.map((result, index) => {
          const name = `${result.Driver.givenName} ${result.Driver.familyName}`;
          return (
            <PilotCard
              key={index}
              position={result.position}
              driverName={name}
              commandName={result.Constructor.name}
              points={""}
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

export default RaceInfoQualifying;
