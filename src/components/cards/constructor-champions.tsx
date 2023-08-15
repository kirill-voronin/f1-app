import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ConstructorIcons from "../../icons/constructor-icons/constructors-icons";
import { colors } from "../../style/colors";

interface AllWinnersCardProps {
  year: string;
  constructorName?: string;
  constructorId: string;
}

const ConstructorChampionCard = ({
  year,
  constructorName,
  constructorId,
}: AllWinnersCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.year}>
        <Text style={textStyle.position}>{year}</Text>
      </View>
      <View style={styles.nationality}>
        <ConstructorIcons size="medium" name={constructorId} />
      </View>
      <View style={styles.nameBox}>
        <Text style={textStyle.constructorCard}>{constructorName}</Text>
      </View>
    </View>
  );
};

export default ConstructorChampionCard;

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
  constructorCard: {
    color: colors.black,
    fontStyle: "italic",
    fontWeight: "700",
    fontSize: 18,
  },
});
