import moment from "moment";
import { StyleSheet, Text, View } from "react-native";
import { textStyle } from "../../style/style";
import Icons from "../icons";

interface RaceCardHeaderProps {
  circuit?: string;
  country?: string;
  startDate?: string;
  endDate?: string;
}

export default function Header({
  circuit,
  country,
  startDate = "2022-11-18",
  endDate = "2022-11-20"
}: RaceCardHeaderProps) {
  return (
    <View style={style.container}>
      <View style={style.icon}>
        <Icons name={country} size="small" />
      </View>
      <View style={style.textContainer}>
        <Text style={textStyle.mainSmall}>
          {circuit}
        </Text>
        <Text>
          {moment(startDate).format("DD-")}
          {moment(endDate).format("DD MMMM")}
          {/* {startDate} */}
        </Text>
      </View>

    </View>
  )
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
})