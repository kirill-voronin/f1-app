import moment from "moment";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DriverStanding } from "../../../axois/data-pilots";
import { getAge } from "../../../functions/getAge";
import CommandIcons from "../../../icons/constructor-icons/constructors-icons";
import FlagIcons from "../../../icons/flag-icons/flag-icons";
import { colors } from "../../../style/colors";

interface NationalityInformationProps {
  pilot: DriverStanding;
}

const NationalityInformation = ({ pilot }: NationalityInformationProps) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.flagContainer}>
          <FlagIcons nationality={pilot.Driver.nationality} size="large" />
          <View style={styles.textContainer}>
            <Text style={styles.text}>{pilot.Driver.nationality}</Text>
            <Text style={[styles.text]}>
              {moment(pilot.Driver.dateOfBirth).format("DD.MM.YYYY")} (
              {getAge(pilot.Driver.dateOfBirth)})
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.flagContainer}>
          <CommandIcons size="large" name={pilot.Constructors[0].constructorId} />
          <Text style={[styles.text, { left: 15 }]}>{pilot.Constructors[0].name}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.statisticCard,
    marginHorizontal: 15,
    borderRadius: 15,
    height: 80,
    marginTop: 10,
  },
  flagContainer: {
    flexDirection: "row",
  },
  textContainer: {
    top: -8,
    left: 15,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default NationalityInformation;
