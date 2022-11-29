import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { textStyle } from "../style/style";

const ErrorComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={textStyle.main}>Ошибка соединения с сервером!</Text>
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

export default ErrorComponent;
