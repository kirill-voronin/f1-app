import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "../icons";
import { textStyle } from "../../style/style";
import { Race } from "../../axois/api-props";

interface NRHeaderProps {
  nextRace?: Race;
}

export default function NRHeader({
  nextRace,
}: NRHeaderProps) {
  return (
    <View>
      <Text style={[style.nextRace, textStyle.header]}>
        Следующая гонка
      </Text>
      <View style={style.img}>
        <Icon name={nextRace?.Circuit.Location.country}/>
        <Text style={style.granPri}>
          {nextRace?.raceName}
        </Text>
      </View>      
    </View>
  )
}

const style = StyleSheet.create({
  nextRace: {
    marginTop: 5,
    textAlign: "center",
  },
  img: {
    flexDirection:"row",
    justifyContent: "center",
    height: 50,
    width: "100%",
    marginTop: 10,
  },
  granPri: {
    fontSize: 20,
    fontWeight: "700",
    marginStart: 10
  },
});