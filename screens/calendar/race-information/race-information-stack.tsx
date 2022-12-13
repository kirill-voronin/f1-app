import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ControlIcons from "../../../icons/controls-icons";
import { colors } from "../../../style/colors";
import { textStyle } from "../../../style/style";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import RaceInfoQualifying from "./race-information-qualifying";
import RaceInfoRaceResult from "./race-information-race";
import RaceInfoSprint from "./race-Information-sprint";

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

  const showBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.flexHeaderContainer}>
          <View style={styles.flexIconContainer}>
            <TouchableOpacity onPress={showBack} accessibilityRole="button">
              <ControlIcons name="back" size="buttonBack"></ControlIcons>
            </TouchableOpacity>
          </View>
          <View style={styles.flexTextContainer}>
            <Text style={textStyle.headerWhite}>Информация о гонке</Text>
          </View>
        </View>
      </View>
      <TopTab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.primary,
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
  header: {
    height: 60,
    backgroundColor: colors.primary,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
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

export default RaceInformationStack;
