import { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { MRDataRace, Race } from "../../axois/data-race";
import axios, { NEXT_RACE } from "../../axois/axios";
import { textStyle } from "../../style/style";
import RaceTime from "./race-time";
import { colors } from "../../style/colors";
import FlagIcons from "../../icons/flag-icons/flag-icons";
import { last } from "../../mock/last";
import ErrorComponent from "../error";
import Winter from "../winter";

export default function NextRace() {
  const [nextRace, setNextRace] = useState<Race>();
  const [isLoad, setIsLoad] = useState<boolean>(true);
  const [isEndSeason, setIsEndSeason] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoad(true);
      await axios
        .get(NEXT_RACE)
        .then((response) => {
          const data: MRDataRace = response.data;
          if (data.MRData.RaceTable.Races.length === 0) setIsEndSeason(true);
          else setNextRace(data.MRData.RaceTable.Races[0]);
          // setNextRace(last.MRData.RaceTable.Races[0]);
          setIsLoad(false);
        })
        .catch((err) => {
          setIsLoad(false);
        });
    };
    getData();
  }, []);

  return (
    <View style={style.container}>
      {isLoad && (
        <View style={style.isLoadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
      {nextRace && (
        <>
          <View>
            <Text style={[style.nextRace, textStyle.header]}>Следующая гонка</Text>
            <View style={style.img}>
              <FlagIcons size="medium" name={nextRace?.Circuit.Location.country} />
              <Text style={style.granPri}>{nextRace?.raceName}</Text>
            </View>
          </View>
          <View style={style.line} />
          <RaceTime nextRace={nextRace} />
        </>
      )}
      {!nextRace && !isLoad && !isEndSeason && <ErrorComponent />}
      {isEndSeason && <Winter />}
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
  isLoadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
