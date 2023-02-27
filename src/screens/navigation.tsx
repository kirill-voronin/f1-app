import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialBottomMenu from "../components/material-bottom-menu";
import RaceInformationStack from "./calendar/race-information/race-information-stack";
import StatisticPilotsChampionship from "./statistics/screens/statistic-pilots-championship";
import PilotInformationScreen from "./pilot-information/pilot-information";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}>
        <Stack.Screen name="Calendar" component={MaterialBottomMenu} />
        <Stack.Screen name="RaceInformation" component={RaceInformationStack} />
        <Stack.Screen name="PilotInformation" component={PilotInformationScreen} />
        <Stack.Screen
          name="StatisticAllWinners"
          component={StatisticPilotsChampionship}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

export default Navigation;
