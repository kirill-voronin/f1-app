import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ConstructorIcons from "../../icons/constructor-icons/constructors-icons";
import { colors, constructorsColors } from "../../style/colors";

interface CommandCardProps {
  position: string;
  commandName: string;
  engine: string;
  points: string;
  nationality: string;
  commandId: string;
}

export default function CommandCard({
  position,
  commandName,
  engine,
  points,
  nationality,
  commandId,
}: CommandCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.positionBox}>
        <Text style={textStyle.position}>{position}</Text>
      </View>
      <View
        style={[
          styles.commandColorBox,
          { backgroundColor: constructorsColors[commandId] },
        ]}
      />
      <View style={styles.flagBox}>
        <ConstructorIcons name={commandId}></ConstructorIcons>
      </View>
      <View style={styles.nameBox}>
        <Text style={textStyle.constructorCard}>{commandName}</Text>
      </View>
      <View style={styles.pointsBox}>
        <Text style={textStyle.position}>{points}</Text>
      </View>
    </View>
  );
}

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
  positionBox: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center",
  },
  commandColorBox: {
    flex: 1,
    backgroundColor: colors.mercedes,
  },
  flagBox: {
    flex: 3.5,
    justifyContent: "center",
    alignItems: "center",
  },
  nameBox: {
    flex: 10,
    justifyContent: "center",
    paddingStart: 10,
  },
  pointsBox: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
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
