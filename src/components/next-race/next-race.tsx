import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios, { NEXT_RACE } from "../../axois/axios";
import { MRDataRace, Race } from "../../axois/data-race";
import FlagIcons from "../../icons/flag-icons/flag-icons";
import { colors } from "../../style/colors";
import { textStyle } from "../../style/style";
import ErrorComponent from "../error";
import LoadingComponent from "../loading";
import Winter from "../winter";
import RaceTime from "./components/race-time";

interface HeaderProps {
  season?: string;
}

export default function NextRace({ season = "" }: HeaderProps) {
  const [nextRace, setNextRace] = useState<Race>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isEndSeason, setIsEndSeason] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      await axios
        .get(NEXT_RACE)
        .then((response) => {
          const data: MRDataRace = response.data;
          if (data.MRData.RaceTable.Races.length === 0) setIsEndSeason(true);
          else setNextRace(data.MRData.RaceTable.Races[0]);
          // setNextRace(last.MRData.RaceTable.Races[0]);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
        });
    };
    getData();
  }, []);

  return (
    <View style={styles.header}>
      <Text style={styles.season}>Сезон {season}</Text>
      <View style={style.container}>
        <LoadingComponent isLoading={isLoading} />
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
        {!nextRace && !isLoading && !isEndSeason && <ErrorComponent />}
        {isEndSeason && <Winter />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    elevation: 4,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    height: "50%",
  },
  season: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "700",
    color: "#FFFFFF",
    marginTop: 25,
  },
  progress: {
    marginTop: 100,
    textAlign: "center",
    color: "white",
  },
});

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
