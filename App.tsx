import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from './components/header';
import RaceCard from './components/race-card/race-card';
import { MRDataRace, Race } from "./axois/api-props"
import axios, { ALL_RACES, NEXT_RACE } from './axois/axios';

export default function App() {
  const [nextRaces, setNextRaces] = useState<Race[]>([]);
  const [nextRace, setNextRace] = useState<Race>();

  useEffect(() => {
    const getNextRace = async () => {
      const resopnse = await axios.get(NEXT_RACE);
      const thisNextRace: MRDataRace = resopnse.data;
      setNextRace(thisNextRace.MRData.RaceTable.Races[0]);
    }
    getNextRace();
  }, []);

  useEffect(() => {
    const getNextRaces = async () => {
      const response = await axios.get(ALL_RACES);
      const allRaces: MRDataRace = response.data;
      const a = allRaces.MRData.RaceTable.Races.filter(race => Number(race.round) > Number(nextRace?.round));
      setNextRaces(a);
    };
    getNextRaces();
  }, [nextRace]);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {
          nextRaces.map((race) => {
            return (
              <RaceCard
                key={race.raceName}
                name={race.raceName}
                circuit={race.Circuit.Location.locality}
                country={race.Circuit.Location.country}
                startDate={race.FirstPractice.date}
                endDate={race.date}
              />
            )
          })
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
});
