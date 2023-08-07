import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { colors } from "../style/colors";
import MenuIcons from "../icons/menu-icons";
import PilotsStanding from "../screens/pilots-standing";
import ConstructorsStanding from "../screens/constructor-standing";
import Calendar from "../screens/calendar/calendar";
import StatisticAll from "../screens/statistics/statistic-all";
import ChampionsStack from "../screens/statistics/screens/champions/statistic-championship-stack";

const MaterialTabs = createMaterialBottomTabNavigator();

const MaterialBottomMenu = () => {
  return (
    <MaterialTabs.Navigator
      barStyle={{ backgroundColor: colors.secondary }}
      activeColor={colors.primary}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          return <MenuIcons name={route.name} color={color} />;
        },
        tabBarActiveTintColor: "#EE191F",
        tabBarInactiveTintColor: "#FFFFFF",
      })}>
      <MaterialTabs.Screen name="Календарь" component={Calendar} />
      <MaterialTabs.Screen name="Пилоты" component={PilotsStanding} />
      <MaterialTabs.Screen name="Команды" component={ConstructorsStanding} />
      <MaterialTabs.Screen name="Чемпионы" component={ChampionsStack} />
    </MaterialTabs.Navigator>
  );
};

export default MaterialBottomMenu;
