import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { textStyle } from "../style/style";

const Winter = () => {
  return (
    <View style={styles.container}>
      <Text style={textStyle.main}>Зимняя пауза!</Text>
      <Text style={textStyle.main}>
        Пожауйста, подождите, когда сформируется новый календарь!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Winter;
