import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../../style/colors";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RaceInfoQualifying from "./race-information-qualifying";
import RaceInfoRaceResult from "./race-information-race";
import RaceInfoSprint from "./race-Information-sprint";
import Header from "../../../components/header";

const TopTab = createMaterialTopTabNavigator();

interface RaceInformationProps {
  navigation: any;
  route: any;
}

const RaceInformationStack = ({ navigation, route }: RaceInformationProps) => {
  const round = route.params?.round;
  const isSprint = route.params?.isSprint;
  const qualifyingTime = route.params?.qualifyingTime;
  const raceTime = route.params?.raceTime;
  let sprintTime = undefined;
  if (isSprint) {
    sprintTime = route.params?.sprintTime;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header withBackButton navigtion={navigation} />
      <TopTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.white,
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: colors.transparent },
          tabBarItemStyle: { width: "auto" },
          tabBarIndicatorStyle: { backgroundColor: colors.primary },
        }}>
        <TopTab.Screen
          name="Квалификация"
          component={RaceInfoQualifying}
          initialParams={{ round: round, qualifyingTime: qualifyingTime }}
        />
        {isSprint && (
          <TopTab.Screen
            name="Спринт"
            component={RaceInfoSprint}
            initialParams={{ round: round, sprintTime: sprintTime }}
          />
        )}
        <TopTab.Screen
          name="Гонка"
          component={RaceInfoRaceResult}
          initialParams={{ round: round, raceTime: raceTime }}
        />
      </TopTab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
});

export default RaceInformationStack;
