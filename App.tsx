import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import PilotsStanding from "./screens/pilots-standing";
import MenuIcons from "./icons/menu-icons";
import { colors } from "./style/colors";
import { StatusBar } from "react-native";
import ConstructorsStanding from "./screens/commands-standing";
import CalendarStack from "./screens/calendar/calendar-stack";
import StatisticsStack from "./screens/statistics/statistics-stack";

const MaterialTabs = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor={colors.primary} />
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
        <MaterialTabs.Screen name="Календарь" component={CalendarStack} />
        <MaterialTabs.Screen name="Пилоты" component={PilotsStanding} />
        <MaterialTabs.Screen name="Команды" component={ConstructorsStanding} />
        <MaterialTabs.Screen name="Статистика" component={StatisticsStack} />
      </MaterialTabs.Navigator>
    </NavigationContainer>
  );
}
