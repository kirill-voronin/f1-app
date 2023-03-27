import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ControlIcons from "../icons/controls-icons";
import { colors } from "../style/colors";
import { textStyle } from "../style/style";

interface HeaderProps {
  withBackButton?: boolean;
  navigtion?: any;
  title: string;
  children?: any;
}

const Header: React.FC<HeaderProps> = ({
  children,
  withBackButton = false,
  navigtion: navigation,
  title,
}) => {
  const showBack = () => {
    navigation.goBack();
  };

  return (
    <View style={children ? styles.bigHeader : styles.header}>
      <View style={styles.flexHeaderContainer}>
        <View style={styles.headerRow}>
          <Text style={textStyle.headerWhite}>{title}</Text>
        </View>
        {withBackButton && (
          <View style={styles.buttonBack}>
            <TouchableOpacity onPress={showBack} accessibilityRole="button">
              <ControlIcons name="back" size="buttonBack"></ControlIcons>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {children}
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
  bigHeader: {
    backgroundColor: colors.primary,
    elevation: 4,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    height: 250,
  },
  headerRow: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  buttonBack: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "baseline",
    top: 0,
    left: 25,
    right: 0,
    bottom: 0,
  },
  flexHeaderContainer: {
    flex: 1,
    flexDirection: "row",
  },
});

export default Header;
