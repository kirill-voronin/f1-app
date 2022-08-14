import { StyleSheet, Text, View } from "react-native";
import { textStyle } from "../../style/style";
import Icons from "../icons";

interface RaceCardFooterProps {
  name?: string;
}

export default function Footer({
  name
}: RaceCardFooterProps) {
  return (
    <View style={style.container}>
      <Text style={textStyle.header}>
        {name}
      </Text>
      {/* <Icons name="arrow-down" /> */}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginStart: 10,
    marginTop: 7,
  }
})