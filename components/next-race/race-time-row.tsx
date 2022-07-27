import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { DateTime } from "../../axois/api-props";
import { textStyle } from "../../style/style";

interface RaceTimeRowProps {
  title: string;
  date?: string;
  time?: string;
}

export default function RaceTimeRow({
  title,
  date,
  time,
}: RaceTimeRowProps) {
  const [offset, setOffset] = useState<number>(0);

  const curDate: Date = new Date(`${date}T${time}`)

  const dateOption: Intl.DateTimeFormatOptions  = {
    month: "long",
    day: "numeric",
  };

  const timeOption: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric"
  }

  useEffect(() => {
    const dateNow: Date = new Date();
    setOffset(dateNow.getTimezoneOffset() / 60);
  }, [])
  
  
  return (
    <View style={style.row}>
      <Text style={[style.title, textStyle.main]}>
        {title}
      </Text>
      <Text style={[textStyle.main]}>
        {curDate.toLocaleString("ru", dateOption)}
      </Text>
      <Text style={textStyle.main}>
        {curDate.toLocaleString("ru", timeOption)}
      </Text>
    </View>
  )
};

const style = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection:"row",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
    fontSize: 24,
    fontWeight: "700",
    marginTop: 15,
  },
  title: {
    flexBasis: 140
  },
  date: {
  }
});