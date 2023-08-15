import React from "react";
import { View, Text, StyleSheet } from "react-native";

import FlagIcons from "../../icons/flag-icons/flag-icons";
import { colors } from "../../style/colors";

interface AllWinnersCardProps {
  year: string;
  driverName?: string;
  commandName?: string;
  nationality: string;
}

const AllWinnersCard = ({
  year,
  commandName,
  driverName,
  nationality,
}: AllWinnersCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.year}>
        <Text style={textStyle.position}>{year}</Text>
      </View>
      <View style={styles.nationality}>
        <FlagIcons size="medium" nationality={nationality} />
      </View>
      <View style={styles.nameBox}>
        <Text style={textStyle.name}>{driverName}</Text>
        <Text style={textStyle.command}>{commandName}</Text>
      </View>
    </View>
  );
};

export default AllWinnersCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 60,
    backgroundColor: colors.white,
    marginVertical: 15,
    marginHorizontal: 20,
    borderRadius: 15,
  },
  year: {
    flex: 3.5,
    justifyContent: "center",
    alignItems: "center",
  },
  nationality: {
    flex: 3.5,
    justifyContent: "center",
    alignItems: "center",
  },
  nameBox: {
    flex: 10,
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
