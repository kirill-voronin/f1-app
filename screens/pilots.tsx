import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { textStyle } from "../style/style";

export default function Pilots() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={textStyle.inDevelopmentText}>В разработке</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#1E1E1E",
  },
});
