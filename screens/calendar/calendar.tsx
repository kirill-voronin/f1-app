import React, { useCallback, useEffect, useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { MRDataRace, Race } from "../../axois/data-race";
import axios, { ALL_RACES, NEXT_RACE } from "../../axois/axios";
import Header from "../../components/header";
import RaceCard from "../../components/race-card/race-card";
import { textStyle } from "../../style/style";
import { colors } from "../../style/colors";
import { DataProvider, LayoutProvider, RecyclerListView } from "recyclerlistview";

interface CalendarProps {
  navigation: any;
}

export default function Calendar({ navigation }: CalendarProps) {
  const [nextRaces, setNextRaces] = useState<Race[]>([]);
  const [lastRaces, setLastRaces] = useState<Race[]>([]);
  const [nextRace, setNextRace] = useState<Race>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [row, setRow] = useState<any>([]);

  useEffect(() => {
    const getNextRace = async () => {
      await axios.get(NEXT_RACE).then((response) => {
        const thisNextRace: MRDataRace = response.data;
        setNextRace(thisNextRace.MRData.RaceTable.Races[0]);
      });
    };
    getNextRace();
  }, []);

  useEffect(() => {
    const getNextRaces = async () => {
      setIsLoading(true);
      await axios.get(ALL_RACES).then((response) => {
        const allRaces: MRDataRace = response.data;
        const nextRaces = allRaces.MRData.RaceTable.Races.filter(
          (race) => Number(race.round) > Number(nextRace?.round)
        );
        const lastRaces = allRaces.MRData.RaceTable.Races.filter(
          (race) => Number(race.round) < Number(nextRace?.round)
        );
        setNextRaces(nextRaces);
        setLastRaces(lastRaces);
        if (lastRaces.length != 0) {
          setIsLoading(false);
        }
        setRow(dataProvider.cloneWithRows(lastRaces));
        console.log("loading races is done");
      });
    };
    getNextRaces();
  }, [nextRace]);

  const onRaceCardPressHandler = (round = "0") => {
    navigation.navigate("RaceInformation", {
      round,
    });
  };

  // const renderRaceCards = (races: Race[]) => {
  //   return races.map((race) => {
  //     return (
  //       <TouchableOpacity
  //         key={`touch-${race.raceName}`}
  //         onPress={() => onRaceCardPressHandler(race.round)}>
  //         <RaceCard
  //           key={race.raceName}
  //           name={race.raceName}
  //           circuit={race.Circuit.Location.locality}
  //           country={race.Circuit.Location.country}
  //           startDate={race.FirstPractice.date}
  //           endDate={race.date}
  //         />
  //       </TouchableOpacity>
  //     );
  //   });
  // };

  const renderRaceCards = (item: any) => (
    <RaceCard
      key={item.raceName}
      name={item.raceName}
      circuit={item.Circuit.Location.locality}
      country={item.Circuit.Location.country}
      startDate={item.FirstPractice.date}
      endDate={item.date}
    />
  );

  const keyExtractor = (item: { Circuit: { circuitId: any } }) =>
    `shedules-${item.Circuit.circuitId}`;

  const laoytProvider = new LayoutProvider(
    (index) => 0,
    (type, dim) => {
      dim.width = 200;
      dim.height = 50;
    }
  );

  let dataProvider = new DataProvider((r1, r2) => {
    return r1 !== r2;
  });

  return (
    <View style={styles.container}>
      <Header />

      {isLoading && (
        <View style={styles.isLoadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}

      <RecyclerListView
        rowRenderer={renderRaceCards}
        layoutProvider={laoytProvider}
        dataProvider={row}
      />

      {/* <FlatList
        data={lastRaces}
        keyExtractor={keyExtractor}
        renderItem={renderRaceCards}
        extraData
        getItemLayout={(data, index) => ({ length: 70, offset: 70 * index, index })}
        initialNumToRender={8}
        maxToRenderPerBatch={20}
        removeClippedSubviews
      /> */}

      {/* <ScrollView>
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
      </ScrollView> */}
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
