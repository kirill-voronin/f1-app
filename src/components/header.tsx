import { StyleSheet, Text, View } from "react-native";
import { colors } from "../style/colors";
import NextRace from "./next-race/next-race";

interface HeaderProps {
  season?: string;
}

export default function Header({ season = "" }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.season}>Сезон {season}</Text>
      <NextRace />
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
