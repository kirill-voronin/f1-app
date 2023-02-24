import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ControlIcons from "../icons/controls-icons";
import { colors } from "../style/colors";
import { textStyle } from "../style/style";

interface HeaderProps {
  withBackButton?: boolean;
  navigtion?: any;
  title: string;
}

const Header = ({
  withBackButton = false,
  navigtion: navigation,
  title,
}: HeaderProps) => {
  const showBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <View style={styles.flexHeaderContainer}>
        {withBackButton && (
          <View style={styles.flexIconContainer}>
            <TouchableOpacity onPress={showBack} accessibilityRole="button">
              <ControlIcons name="back" size="buttonBack"></ControlIcons>
            </TouchableOpacity>
          </View>
        )}
        <View
          style={{
            flex: withBackButton ? 7 : 1,
            justifyContent: "center",
            alignItems: withBackButton ? "flex-start" : "center",
          }}>
          <Text style={textStyle.headerWhite}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: colors.primary,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  flexHeaderContainer: {
    flex: 1,
    flexDirection: "row",
  },
  flexIconContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Header;
