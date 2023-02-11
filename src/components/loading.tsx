import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { colors } from "../style/colors";

interface LoadingComponentProps {
  isLoading: boolean;
}

const LoadingComponent = ({ isLoading }: LoadingComponentProps) => {
  return (
    <>
      {isLoading && (
        <View style={styles.isLoadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  isLoadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default LoadingComponent;
