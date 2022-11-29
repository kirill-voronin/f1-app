import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
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

  const renderPilotCard = ({ item }: { item: QualifyingResult }) => {
    const name = `${item.Driver.givenName} ${item.Driver.familyName}`;
    return (
      <PilotCard
        position={item.position}
        driverName={name}
        commandName={item.Constructor.name}
        points={""}
        nationality={item.Driver.nationality}
        commandId={item.Constructor.constructorId}
      />
    );
  };

  const keyExtractor = (item: QualifyingResult) => `race-${item.Driver.driverId}`;

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.isLoadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
      <FlatList
        keyExtractor={keyExtractor}
        data={qualifyingResults}
        renderItem={renderPilotCard}
      />
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
