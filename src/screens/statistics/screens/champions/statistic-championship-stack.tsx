import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import StaisticCommandsChampionship from "./statistic-commands-championship";
import StatisticPilotsChampionship from "./statistic-pilots-championship";
import Header from "../../../../components/header";
import { colors } from "../../../../style/colors";

const TopTab = createMaterialTopTabNavigator();

interface ChampionsProps {
  navigation: any;
  route: any;
}

const ChampionsStack = ({ navigation, route }: ChampionsProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Чемпионы мира" />
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
          name="Пилоты"
          component={StatisticPilotsChampionship}
          // initialParams={{ round: round, qualifyingTime: qualifyingTime }}
        />
        <TopTab.Screen
          name="Конструкторы"
          component={StaisticCommandsChampionship}
          // initialParams={{ round: round, raceTime: raceTime }}
        />
      </TopTab.Navigator>
    </SafeAreaView>
  );
  // );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
});

export default ChampionsStack;
