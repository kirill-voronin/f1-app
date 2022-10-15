import React, { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet, Text } from "react-native";
import { MRDataRace, Race } from "../axois/api-props";
import axios, { ALL_RACES, NEXT_RACE } from "../axois/axios";
import Header from "../components/header";
import RaceCard from "../components/race-card/race-card";
import { textStyle } from "../style/style";

export default function Calendar() {
  const [nextRaces, setNextRaces] = useState<Race[]>([]);
  const [lastRaces, setLastRaces] = useState<Race[]>([]);
  const [nextRace, setNextRace] = useState<Race>();

  useEffect(() => {
    const getNextRace = async () => {
      const resopnse = await axios.get(NEXT_RACE);
      const thisNextRace: MRDataRace = resopnse.data;
      setNextRace(thisNextRace.MRData.RaceTable.Races[0]);
    };
    getNextRace();
  }, []);

  useEffect(() => {
    const getNextRaces = async () => {
      const response = await axios.get(ALL_RACES);
      const allRaces: MRDataRace = response.data;
      const nextRaces = allRaces.MRData.RaceTable.Races.filter(
        (race) => Number(race.round) > Number(nextRace?.round)
      );
      const lastRaces = allRaces.MRData.RaceTable.Races.filter(
        (race) => Number(race.round) < Number(nextRace?.round)
      );
      setNextRaces(nextRaces);
      setLastRaces(lastRaces);
    };
    getNextRaces();
  }, [nextRace]);

  const renderRaceCards = (races: Race[]) => {
    return races.map((race) => {
      return (
        <RaceCard
          key={race.raceName}
          name={race.raceName}
          circuit={race.Circuit.Location.locality}
          country={race.Circuit.Location.country}
          startDate={race.FirstPractice.date}
          endDate={race.date}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {nextRaces.length != 0 && (
          <>
            <Text style={[textStyle.headerWhite, styles.header]}>
              Предстоящие события
            </Text>
            {renderRaceCards(nextRaces)}
          </>
        )}
        {lastRaces.length != 0 && (
          <>
            <Text style={[textStyle.headerWhite, styles.header]}>
              Завершенные события
            </Text>
            {renderRaceCards(lastRaces)}
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  header: {
    marginTop: 15,
  },
});
