import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import axios, { year } from "../../../axois/axios";
import { MRDataSprintResults, SprintResult } from "../../../axois/data-sprint-results";
import FutureRace from "../../../components/future-race";
import LoadingComponent from "../../../components/loading";
import PilotCard from "../../../components/pilot-card";
import { colors } from "../../../style/colors";

interface RaceInfoSprintProps {
  route?: any;
}

const RaceInfoSprint = ({ route }: RaceInfoSprintProps) => {
  const [sprintResults, setSprintResutls] = useState<SprintResult[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const round = route.params.round;
  const sprintTime = route.params?.sprintTime;

  useEffect(() => {
    if (!sprintTime) {
      setIsLoading(true);
      axios.get(`/${year}/${round}/sprint.json`).then((response) => {
        const qualifying: MRDataSprintResults = response.data;
        setSprintResutls(qualifying.MRData.RaceTable.Races[0].SprintResults);
        setIsLoading(false);
      });
    }
  }, [round]);

  const renderPilotCard = ({ item }: { item: SprintResult }) => {
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

  const keyExtractor = (item: SprintResult) => `sprint-${item.Driver.driverId}`;

  return (
    <View style={styles.container}>
      {sprintTime && <FutureRace date={sprintTime} />}
      <LoadingComponent isLoading={isLoading} />
      <FlatList
        keyExtractor={keyExtractor}
        data={sprintResults}
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

export default RaceInfoSprint;
