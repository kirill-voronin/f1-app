import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import StatisticCard from "../../components/statistic-card";
import { colors } from "../../style/colors";
import { textStyle } from "../../style/style";

const StatisticAll = ({ navigation }: any) => {
  const onStatisticPressHandler = () => {
    navigation.navigate("StatisticAllWinners");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={textStyle.headerWhite}>Статистика</Text>
      </View>
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
  header: {
    height: 60,
    backgroundColor: colors.primary,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: "center",
  },
});

export default StatisticAll;
