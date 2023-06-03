import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import axios, { year } from "../../../axois/axios";
import {
  MRDataQualifyingResults,
  QualifyingResult,
} from "../../../axois/data-qualifying";
import FutureRace from "../../../components/future-race";
import LoadingComponent from "../../../components/loading";
import PilotCard from "../../../components/cards/pilot-card";
import { colors } from "../../../style/colors";

interface RaceInfoQualifyingProps {
  route?: any;
}

const RaceInfoQualifying = ({ route }: RaceInfoQualifyingProps) => {
  const [qualifyingResults, setQualifyingResutls] = useState<QualifyingResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const round = route.params.round;
  const qualifyingTime = route.params?.qualifyingTime;

  useEffect(() => {
    if (!qualifyingTime) {
      setIsLoading(true);
      axios.get(`/${year}/${round}/qualifying.json`).then((response) => {
        const qualifying: MRDataQualifyingResults = response.data;
        setQualifyingResutls(qualifying.MRData.RaceTable.Races[0].QualifyingResults);
        setIsLoading(false);
      });
    }
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
      {qualifyingTime && <FutureRace date={qualifyingTime} />}
      <LoadingComponent isLoading={isLoading} />
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
});

export default RaceInfoQualifying;
