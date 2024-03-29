import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";

import axios, { year } from "../../../axois/axios";
import { MRDataRaceResults, Result } from "../../../axois/data-race-results";
import PilotCard from "../../../components/cards/pilot-card";
import FutureRace from "../../../components/future-race";
import LoadingComponent from "../../../components/loading";
import { colors } from "../../../style/colors";

interface RaceInfoRaceResultProps {
  route?: any;
}

const RaceInfoRaceResult = ({ route }: RaceInfoRaceResultProps) => {
  const [raceResults, setRaceResutls] = useState<Result[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const round = route.params.round;
  const raceTime = route.params?.raceTime;

  useEffect(() => {
    if (!raceTime) {
      setIsLoading(true);
      axios.get(`/${year}/${round}/results.json`).then((response) => {
        const race: MRDataRaceResults = response.data;
        setRaceResutls(race.MRData.RaceTable.Races[0].Results);
        setIsLoading(false);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      {raceTime && <FutureRace date={raceTime} />}
      <LoadingComponent isLoading={isLoading} />
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
