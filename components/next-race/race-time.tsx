import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { DateTime, Race } from "../../axois/api-props";
import { textStyle } from "../../style/style";
import RaceTimeRow from "./race-time-row";

interface RaceTimeProps {
  nextRace?: Race;
}

export default function RaceTime({
  nextRace
}: RaceTimeProps) {
  const [isSprint, setIsSprint] = useState<boolean>(false);

  const qualifying = (): JSX.Element => {
    return (
      <RaceTimeRow 
      title="Квалификация"
      date={nextRace?.Qualifying.date} 
      time={nextRace?.Qualifying.time} />
    )
  }

  const sprint = (): JSX.Element | null => {
    if (typeof nextRace?.Spint !== "undefined") {
      setIsSprint(true);
      return (
        <RaceTimeRow 
        title="Спринт"
        date={nextRace?.Spint?.date} 
        time={nextRace?.Spint?.time} />
      )
    } else {
      return null;
    }
  }

  const race = (): JSX.Element => {
    return (
      <RaceTimeRow 
      title="Гонка"
      date={nextRace?.date} 
      time={nextRace?.time} />
    )
  }

  return (
    <View>
      {isSprint && sprint()}
      {qualifying()}
      {race()}
    </View>
  );
}

const style = StyleSheet.create({

});