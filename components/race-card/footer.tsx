import { StyleSheet, Text, View } from "react-native";
import ControlIcons from "../../icons/controls-icons";
import { textStyle } from "../../style/style";

interface RaceCardFooterProps {
  name?: string;
}

export default function Footer({ name }: RaceCardFooterProps) {
  return (
    <View style={style.container}>
      <Text style={textStyle.header}>{name}</Text>
      <ControlIcons name="more-information" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    marginStart: 10,
    marginEnd: 10,
    marginTop: 7,
  },
});
