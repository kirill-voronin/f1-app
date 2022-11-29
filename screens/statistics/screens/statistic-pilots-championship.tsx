import React, { Component, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from "react-native";
import axios, { ALL_PILOTS_CHAMPIONS_STANDING } from "../../../axois/axios";
import { colors } from "../../../style/colors";
import { textStyle } from "../../../style/style";
import { MRDataAllWinners, StandingsList } from "../../../axois/data-all-winners";
import AllWinnersCard from "../../../components/pilot-all-winners-card";
import ControlIcons from "../../../icons/controls-icons";

interface StatisticPilotsChampionshipProps {
  navigation: any;
}

const StatisticPilotsChampionship = ({
  navigation,
}: StatisticPilotsChampionshipProps) => {
  const [champions, setChampions] = useState<StandingsList[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const showBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setIsLoading(true);
    axios.get(ALL_PILOTS_CHAMPIONS_STANDING).then((response) => {
      const thisChampions: MRDataAllWinners = response.data;
      setChampions(thisChampions.MRData.StandingsTable.StandingsLists.reverse());
      setIsLoading(false);
    });
  }, []);

  const keyExtractor = (item: any) => `shedules-${item.season}`;

  const renderPilotCard = ({ item }: { item: StandingsList }) => {
    const name = `${item.DriverStandings[0].Driver.givenName} ${item.DriverStandings[0].Driver.familyName}`;
    return (
      <AllWinnersCard
        year={item.season}
        driverName={name}
        commandName={item.DriverStandings[0].Constructors[0].name}
        nationality={item.DriverStandings[0].Driver.nationality.replace(" ", "")}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.flexHeaderContainer}>
          <View style={styles.flexIconContainer}>
            <TouchableOpacity onPress={showBack} accessibilityRole="button">
              <ControlIcons name="back" size="buttonBack"></ControlIcons>
            </TouchableOpacity>
          </View>
          <View style={styles.flexTextContainer}>
            <Text style={textStyle.headerWhite}>Чемпионы мира</Text>
          </View>
        </View>
      </View>
      {isLoading && (
        <View style={styles.isLoadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
      {champions.length !== 0 && (
        <FlatList
          data={champions}
          keyExtractor={keyExtractor}
          renderItem={renderPilotCard}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  header: {
    height: 60,
    backgroundColor: colors.primary,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: "center",
  },
  isLoadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  flexHeaderContainer: {
    flex: 1,
    flexDirection: "row",
  },
  flexIconContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  flexTextContainer: {
    flex: 7,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export default StatisticPilotsChampionship;
