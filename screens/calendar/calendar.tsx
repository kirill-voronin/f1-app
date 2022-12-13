import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { MRDataRace, Race } from "../../axois/data-race";
import axios, { ALL_RACES, NEXT_RACE } from "../../axois/axios";
import Header from "../../components/header";
import RaceCard from "../../components/race-card/race-card";
import { textStyle } from "../../style/style";
import { colors } from "../../style/colors";

interface CalendarProps {
  navigation: any;
}

export default function Calendar({ navigation }: CalendarProps) {
  const [nextRaces, setNextRaces] = useState<Race[]>([]);
  const [lastRaces, setLastRaces] = useState<Race[]>([]);
  const [nextRace, setNextRace] = useState<Race>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isEndSeason, setIsEndSeason] = useState<boolean>(false);

  useEffect(() => {
    const getNextRace = async () => {
      await axios.get(NEXT_RACE).then((response) => {
        const thisNextRace: MRDataRace = response.data;
        if (thisNextRace.MRData.RaceTable.Races.length === 0) setIsEndSeason(true);
        else setNextRace(thisNextRace.MRData.RaceTable.Races[0]);
      });
    };
    getNextRace();
  }, []);

  useEffect(() => {
    const getNextRaces = async () => {
      setIsLoading(true);
      await axios.get(ALL_RACES).then((response) => {
        const allRaces: MRDataRace = response.data;
        let nextRaces: Race[] = [];
        let lastRaces: Race[] = [];
        if (!isEndSeason) {
          nextRaces = allRaces.MRData.RaceTable.Races.filter(
            (race) => Number(race.round) > Number(nextRace?.round)
          );
          lastRaces = allRaces.MRData.RaceTable.Races.filter(
            (race) => Number(race.round) < Number(nextRace?.round)
          );
        } else {
          lastRaces = allRaces.MRData.RaceTable.Races;
        }

        setNextRaces(nextRaces);
        setLastRaces(lastRaces);
        if (lastRaces.length != 0 || nextRaces.length != 0) {
          setIsLoading(false);
        }
      });
    };
    getNextRaces();
  }, [nextRace, isEndSeason]);

  const onRaceCardPressHandler = (round = "0", isSprint = false) => {
    navigation.navigate("RaceInformation", {
      round,
      isSprint,
    });
  };

  const renderRaceCards = (races: Race[]) => {
    return races.map((race) => {
      return (
        <TouchableOpacity
          key={`touch-${race.raceName}`}
          onPress={() => onRaceCardPressHandler(race.round, race.Sprint ? true : false)}>
          <RaceCard
            key={race.raceName}
            name={race.raceName}
            circuit={race.Circuit.Location.locality}
            country={race.Circuit.Location.country}
            startDate={race?.FirstPractice?.date}
            endDate={race.date}
          />
        </TouchableOpacity>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Header season={nextRace?.season} />

      {isLoading && (
        <View style={styles.isLoadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}

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
  isLoadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
