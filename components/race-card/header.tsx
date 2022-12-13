import moment from "moment";
import { StyleSheet, Text, View } from "react-native";
import { textStyle } from "../../style/style";
import FlagIcons from "../../icons/flag-icons/flag-icons";

interface RaceCardHeaderProps {
  circuit?: string;
  country?: string;
  startDate?: string;
  endDate?: string;
}

export default function Header({
  circuit,
  country,
  startDate = "",
  endDate = "",
}: RaceCardHeaderProps) {
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
  );
}

const style = StyleSheet.create({
  container: {
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
});
