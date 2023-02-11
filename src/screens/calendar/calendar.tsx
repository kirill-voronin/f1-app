import React, { useEffect, useState } from "react";
import { ScrollView, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MRDataRace, Race } from "../../axois/data-race";
import axios, { ALL_RACES, NEXT_RACE } from "../../axois/axios";
import RaceCard from "../../components/race-card/race-card";
import { textStyle } from "../../style/style";
import { getLocalDateTime } from "../../functions/getLocalDate";
import NextRace from "../../components/next-race/next-race";
import LoadingComponent from "../../components/loading";

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
      await axios
        .get(NEXT_RACE)
        .then((response) => {
          const thisNextRace: MRDataRace = response.data;
          if (thisNextRace.MRData.RaceTable.Races.length === 0) setIsEndSeason(true);
          else setNextRace(thisNextRace.MRData.RaceTable.Races[0]);
        })
        .catch(() => {
          setIsLoading(false);
        });
    };
    getNextRace();
  }, []);

  useEffect(() => {
    const getNextRaces = async () => {
      setIsLoading(true);
      await axios
        .get(ALL_RACES)
        .then((response) => {
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
        })
        .catch(() => {
          setIsLoading(false);
        });
    };
    getNextRaces();
  }, [nextRace, isEndSeason]);

  const onRaceNextCardPressHandler = (
    isSprint: boolean,
    qualifyingTime: string,
    raceTime: string,
    sprintTime?: string
  ) => {
    navigation.navigate("RaceInformation", {
      isSprint,
      qualifyingTime,
      sprintTime,
      raceTime,
    });
  };

  const onRaceLastCardPressHandler = (round = "0", isSprint = false) => {
    navigation.navigate("RaceInformation", {
      round,
      isSprint,
    });
  };

  const renderLastRaceCards = (races: Race[]) => {
    return races.map((race) => {
      return (
        <TouchableOpacity
          key={`touch-${race.raceName}`}
          onPress={() =>
            onRaceLastCardPressHandler(race.round, race.Sprint ? true : false)
          }>
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

  const renderNextRaceCards = (races: Race[]) => {
    return races.map((race) => {
      return (
        <TouchableOpacity
          key={`touch-${race.raceName}`}
          onPress={() => {
            const isSprint = race.Sprint ? true : false;
            onRaceNextCardPressHandler(
              isSprint,
              getLocalDateTime(race?.Qualifying?.date, race?.Qualifying?.time),
              getLocalDateTime(race?.date, race?.time),
              race.Sprint
                ? getLocalDateTime(race.Sprint.date, race.Sprint.time)
                : undefined
            );
          }}>
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
      <NextRace season={nextRace?.season} />
      <LoadingComponent isLoading={isLoading} />
      <ScrollView>
        {nextRaces.length != 0 && (
          <>
            <Text style={[textStyle.headerWhite, styles.header]}>
              Предстоящие события
            </Text>
            {renderNextRaceCards(nextRaces)}
          </>
        )}
        {lastRaces.length != 0 && (
          <>
            <Text style={[textStyle.headerWhite, styles.header]}>
              Завершенные события
            </Text>
            {renderLastRaceCards(lastRaces)}
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
