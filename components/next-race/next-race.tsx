import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MRDataRace, Race } from "../../axois/data-race";
import axios, { NEXT_RACE } from "../../axois/axios";
import { textStyle } from "../../style/style";
import RaceTime from "./race-time";
import Icon from "../../icons/flag-icons";

export default function NextRace() {
  const [nextRace, setNextRace] = useState<Race>();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(NEXT_RACE);
      const data: MRDataRace = response.data;
      setNextRace(data.MRData.RaceTable.Races[0]);
    };
    getData();
  }, []);

  return (
    <View style={style.container}>
      <View>
        <Text style={[style.nextRace, textStyle.header]}>Следующая гонка</Text>
        <View style={style.img}>
          <Icon name={nextRace?.Circuit.Location.country} />
          <Text style={style.granPri}>{nextRace?.raceName}</Text>
        </View>
      </View>
      <View style={style.line} />
      <RaceTime nextRace={nextRace} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    borderRadius: 20,
    height: "60%",
    backgroundColor: "white",
    marginHorizontal: 20,
    marginTop: 20,
    elevation: 4,
    shadowRadius: 20,
    shadowOffset: {
      height: 4,
      width: 5,
    },
  },
  line: {
    height: 3,
    width: "100%",
    backgroundColor: "#FF0000",
  },
  nextRace: {
    marginTop: 5,
    textAlign: "center",
  },
  img: {
    flexDirection: "row",
    justifyContent: "center",
    height: 50,
    width: "100%",
    marginTop: 10,
  },
  granPri: {
    fontSize: 20,
    fontWeight: "700",
    marginStart: 10,
  },
});
