import moment from "moment";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import FlagIcons from "../../icons/flag-icons/flag-icons";
import { colors } from "../../style/colors";
import { textStyle } from "../../style/style";

interface RaceCardProps {
  name?: string;
  circuit?: string;
  country?: string;
  startDate?: string;
  endDate?: string;
  isSprint?: boolean;
}

const RaceCard = ({
  name,
  circuit,
  country,
  endDate = "",
  startDate = "",
  isSprint = false,
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
        {isSprint && <Text style={style.sprint}>Sprint</Text>}
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
    alignItems: "center",

    marginStart: 10,
    marginEnd: 10,
    marginTop: -5,
  },
  sprint: {
    fontSize: 16,
    color: colors.primary,
    fontStyle: "italic",
    fontWeight: "700",
  },
});
