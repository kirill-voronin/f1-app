import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../style/colors";
import { textStyle } from "../style/style";

const InDevelopment = (route: any) => {
  return (
    <View style={styles.container}>
      <Text style={textStyle.inDevelopmentText}>В разработке</Text>
      <Text style={textStyle.inDevelopmentText}>{route.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
  },
});

export default InDevelopment;
