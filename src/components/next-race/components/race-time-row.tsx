import { StyleSheet, Text, View } from "react-native";
import { textStyle } from "../../../style/style";
import moment from "moment";
import "moment/locale/ru";

interface RaceTimeRowProps {
  title: string;
  date?: string;
  time?: string;
}

export default function RaceTimeRow({ title, date, time }: RaceTimeRowProps) {
  moment.locale("ru");
  const curDate: Date = new Date(`${date}T${time}`);

  return (
    <View style={style.row}>
      <Text style={[style.title, textStyle.main]}>{title}</Text>
      <Text style={[style.date, textStyle.main]}>
        {moment(curDate).format("DD MMMM")}
      </Text>
      <Text style={textStyle.main}>{moment(curDate).format("HH:mm")}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginHorizontal: 30,
    marginTop: 15,
  },
  title: {
    flexBasis: 140,
  },
  date: {
    flexBasis: 100,
  },
});
