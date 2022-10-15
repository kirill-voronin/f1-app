import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Calendar from "./screens/calendar";
import Pilots from "./screens/pilots";
import Icons from "./components/icons";
import MenuIcons from "./icons/menu-icons";
import { colors } from "./style/colors";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MaterialTabs = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MaterialTabs.Navigator
        barStyle={{ backgroundColor: colors.secondary }}
        activeColor={colors.primary}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            console.log("name", route.name);
            return <MenuIcons name={route.name} color={color} />;
          },
          tabBarActiveTintColor: "#EE191F",
          tabBarInactiveTintColor: "#FFFFFF",
        })}>
        <MaterialTabs.Screen name="Calendar" component={Calendar} />
        <MaterialTabs.Screen name="Pilots" component={Pilots} />
      </MaterialTabs.Navigator>
    </NavigationContainer>
  );
}
