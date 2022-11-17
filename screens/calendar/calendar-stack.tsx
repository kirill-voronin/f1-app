import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Calendar from "./calendar";
import RaceInformationStack from "./race-information/race-information-stack";

const Stack = createNativeStackNavigator();

const CalendarStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Calendar"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen name="RaceInformation" component={RaceInformationStack} />
    </Stack.Navigator>
  );
};

export default CalendarStack;
