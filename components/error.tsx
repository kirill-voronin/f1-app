import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CryIcon from "../icons/cry-icon";
import { textStyle } from "../style/style";

interface ErrorComponentProps {
  color?: string;
}

const ErrorComponent = ({ color = "#000" }: ErrorComponentProps) => {
  return (
    <View style={styles.container}>
      <CryIcon />
      <Text style={[textStyle.main, { color: color }]}>
        Извините, база данных не отвечает
      </Text>
      <Text style={[textStyle.main, { color: color }]}>Повторите попытку позже</Text>
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
