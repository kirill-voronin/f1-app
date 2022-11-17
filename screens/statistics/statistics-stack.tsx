import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { colors } from "../../style/colors";
import { textStyle } from "../../style/style";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InDevelopment from "../../components/InDevelopment";
import StatisticAll from "./statistic-all";
import StatisticPilotsChampionship from "./screens/statistic-pilots-championship";

const Stack = createNativeStackNavigator();

const StatisticsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="StatisticAll"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="StatisticAll" component={StatisticAll} />
      <Stack.Screen
        name="StatisticAllWinners"
        component={StatisticPilotsChampionship}
        initialParams={{ name: "Чемпионы мира" }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: colors.secondary,
  },
  header: {
    height: 60,
    backgroundColor: colors.primary,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: "center",
  },
});

export default StatisticsStack;
