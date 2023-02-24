import React from "react";
import { StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import Header from "../../components/header";
import StatisticCard from "../../components/statistic-card";
import { colors } from "../../style/colors";

const StatisticAll = ({ navigation }: any) => {
  const onStatisticPressHandler = () => {
    navigation.navigate("StatisticAllWinners");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Статистика" />
      <TouchableOpacity onPress={onStatisticPressHandler}>
        <StatisticCard name={"wins-all-time"} title={"Чемпионы мира"}></StatisticCard>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: colors.secondary,
  },
});

export default StatisticAll;
