import moment from "moment";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import ControlIcons from "../icons/controls-icons";
import FlagIcons from "../icons/flag-icons/flag-icons";
import { textStyle } from "../style/style";

interface RaceCardProps {
  name?: string;
  circuit?: string;
  country?: string;
  startDate?: string;
  endDate?: string;
}

const RaceCard = ({
  name,
  circuit,
  country,
  endDate = "",
  startDate = "",
}: RaceCardProps) => {
  const getStartDate = () => {
    if (startDate === "") {
      return "";
    } else {
      return moment(startDate).format("DD-");
    }
  };

  const getEndDate = () => {
    return moment(endDate).format("DD MMMM");
  };

  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.icon}>
          <FlagIcons name={country} size="small" />
        </View>
        <View style={style.textContainer}>
          <Text style={textStyle.mainSmall}>{circuit}</Text>
          <Text>
            {getStartDate()}
            {getEndDate()}
          </Text>
        </View>
      </View>
      <View style={style.footer}>
        <Text style={textStyle.header}>{name}</Text>
        <ControlIcons name="more-information" />
      </View>
    </View>
  );
};

export default memo(RaceCard);

const style = StyleSheet.create({
  container: {
    height: 70,
    elevation: 4,
    backgroundColor: "white",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  header: {
    marginTop: 3,
    marginStart: 3,
    flexDirection: "row",
  },
  icon: {
    marginTop: 3,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 5,
  },
  footer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginStart: 10,
    marginEnd: 10,
    marginTop: 7,
  },
});
