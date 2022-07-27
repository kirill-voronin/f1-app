import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg from "react-native-svg";
import Icon from "../icons";
import { textStyle } from "../../style/style";
import { MRDataRace, Race } from "../../axois/api-props";
import axios from "../../axois/axios";

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
        {/* <Icon /> */}
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