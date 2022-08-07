import { StyleSheet, Text, View } from "react-native";
import Footer from "./footer";
import Header from "./header";

interface RaceCardProps {
  name?: string;
  circuit?: string;
  country?: string;
}

export default function RaceCard({
  name,
  circuit,
  country,
}: RaceCardProps) {
  return (
    <View style={style.container}>
      <Header
        circuit={circuit}
        country={country}
      />
      <Footer
        name={name} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: "white",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
  },
})