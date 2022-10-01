import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Pilots() {
  return (
    <View style={styles.container}>
      <Text>В разработке</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
});
