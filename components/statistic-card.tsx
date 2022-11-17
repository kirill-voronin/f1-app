import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import ControlIcons from "../icons/controls-icons";
import FlagIcons from "../icons/flag-icons";
import StatisticIcons from "../icons/statistic-icons";
import { colors } from "../style/colors";

interface StatisticCardProps {
  name: string;
  title: string;
}

export default function StatisticCard({ name, title }: StatisticCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.iconBlock}>
        <StatisticIcons name="wins-all-time" />
      </View>
      <View style={styles.flagBox}>
        <Text style={textStyle.name}>{title}</Text>
      </View>
      <View style={styles.nameBox}>
        <ControlIcons name="right" size="right" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 60,
    backgroundColor: colors.white,
    marginVertical: 15,
    marginHorizontal: 20,
    borderRadius: 15,
  },
  iconBlock: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  flagBox: {
    flex: 15,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  nameBox: {
    flex: 2,
    justifyContent: "center",
    paddingStart: 10,
  },
});

const textStyle = StyleSheet.create({
  position: {
    color: colors.black,
    fontWeight: "700",
    fontStyle: "italic",
    fontSize: 24,
  },
  name: {
    color: colors.black,
    fontWeight: "700",
    fontStyle: "italic",
    fontSize: 16,
  },
  command: {
    color: colors.gray,
    fontStyle: "italic",
    fontSize: 12,
  },
});
