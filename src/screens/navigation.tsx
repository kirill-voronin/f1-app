import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import RaceInformationStack from "./calendar/race-information/race-information-stack";
import ConstructorInformationScreen from "./constructor-information/constructor-information";
import PilotInformationScreen from "./pilot-information/pilot-information";
import ChampionsStack from "./statistics/screens/champions/statistic-championship-stack";
import MaterialBottomMenu from "../components/material-bottom-menu";

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
          name="ConstructorInformation"
          component={ConstructorInformationScreen}
        />
        <Stack.Screen name="StatisticAllWinners" component={ChampionsStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
