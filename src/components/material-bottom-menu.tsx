import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";

import MenuIcons from "../icons/menu-icons";
import Calendar from "../screens/calendar/calendar";
import ConstructorsStanding from "../screens/constructor-standing";
import PilotsStanding from "../screens/pilots-standing";
import ChampionsStack from "../screens/statistics/screens/champions/statistic-championship-stack";
import { colors } from "../style/colors";

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
