import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MRDataRace, Race } from "../../axois/api-props";
import axios from "../../axois/axios";
import NRHeader from "./next-race-header";
import RaceTime from "./race-time";

export default function NextRace() {
  const [nextRace, setNextRace] = useState<Race>();
  
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/current/next.json");
      const data: MRDataRace = response.data;
      setNextRace(data.MRData.RaceTable.Races[0]);
    }
    getData();
  }, []);

  return (
    <View style={style.container}>
      <NRHeader nextRace={nextRace} />
      <View style={style.line} />
      <RaceTime nextRace={nextRace}/>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    borderRadius: 20,
    height: "60%",
    backgroundColor: "white",
    marginHorizontal: 20,
    marginTop: 20,
    shadowRadius: 20,
    shadowOffset: {
      height: 4,
      width: 5
    }
  },
  line: {
    height: 3,
    width: "100%",
    backgroundColor: "#FF0000"
  },
})