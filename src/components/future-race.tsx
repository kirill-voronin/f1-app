import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../style/colors";

interface FutureRaceProps {
  date: string;
}

const FutureRace = ({ date }: FutureRaceProps) => {
  const isAccepted = date !== "Invalid date Invalid date";
  return (
    <>
      {isAccepted && (
        <View style={styles.container}>
          <Text style={styles.textStyle}>Событие запланировано на</Text>
          <Text style={styles.textStyle}>{date}</Text>
        </View>
      )}
      {!isAccepted && (
        <View style={styles.container}>
          <Text style={styles.textStyle}>Дата и время еще</Text>
          <Text style={styles.textStyle}>не определены</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
  },
  textStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "700",
  },
});

export default FutureRace;
