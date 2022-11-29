import React, { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
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

  const renderPilotCard = ({ item }: { item: Result }) => {
    const name = `${item.Driver.givenName} ${item.Driver.familyName}`;
    return (
      <PilotCard
        position={item.position}
        driverName={name}
        commandName={item.Constructor.name}
        points={item.points}
        nationality={item.Driver.nationality}
        commandId={item.Constructor.constructorId}
      />
    );
  };

  const keyExtractor = (item: Result) => `race-${item.Driver.driverId}`;

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.isLoadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
      <FlatList
        keyExtractor={keyExtractor}
        data={raceResults}
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

export default RaceInfoRaceResult;
