import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ControlIcons from "../../../icons/controls-icons";
import { colors } from "../../../style/colors";

export interface StasticSmallCardProps {
  title: string;
  data: string;
  icon: string;
}

const StasticSmallCard = ({ title, data, icon }: StasticSmallCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.dataLine}>
        <ControlIcons name={icon} />
        <Text style={styles.dataText}>{data}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: colors.statisticCard,
    height: 100,
  },
  dataLine: {
    marginTop: 15,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#000",
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "700",
  },
  dataText: {
    color: "#000",
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "700",
  },
});

export default StasticSmallCard;
