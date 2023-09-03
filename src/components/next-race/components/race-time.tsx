import { StyleSheet, View } from "react-native";

import RaceTimeRow from "./race-time-row";
import { Race } from "../../../api/data-race";

interface RaceTimeProps {
  nextRace?: Race;
}

export default function RaceTime({ nextRace }: RaceTimeProps) {
  // const [isSprint, setIsSprint] = useState<boolean>(false);
  const isSprint = typeof nextRace?.Sprint !== "undefined";

  const qualifying = (): JSX.Element => {
    return (
      <RaceTimeRow
        title="Квалификация"
        date={nextRace?.Qualifying.date}
        time={nextRace?.Qualifying.time}
      />
    );
  };

  const sprint = (): JSX.Element | null => {
    if (typeof nextRace?.Sprint !== "undefined") {
      // setIsSprint(true);
      return (
        <RaceTimeRow
          title="Спринт"
          date={nextRace?.Sprint?.date}
          time={nextRace?.Sprint?.time}
        />
      );
    } else {
      return null;
    }
  };

  const race = (): JSX.Element => {
    return <RaceTimeRow title="Гонка" date={nextRace?.date} time={nextRace?.time} />;
  };

  return (
    <View style={style.container}>
      {isSprint && sprint()}
      {qualifying()}
      {race()}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    height: "50%",
  },
});
