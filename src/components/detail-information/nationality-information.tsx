import moment from "moment";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { getAge } from "../../functions/getAge";
import ConstructorIcons from "../../icons/constructor-icons/constructors-icons";
import FlagIcons from "../../icons/flag-icons/flag-icons";
import { colors } from "../../style/colors";

interface NationalityInformationProps {
  type: "nationality" | "constructor";
  mainText: string;
  iconId: string;
  birthday?: Date;
}

const NationalityInformation = ({
  type,
  mainText,
  birthday,
  iconId,
}: NationalityInformationProps) => {
  const styleName = birthday ? "textContainer" : "textContainerConstructor";
  const renderIcon = () => {
    if (type === "nationality") {
      return <FlagIcons nationality={mainText} size="large" />;
    }
    return <ConstructorIcons name={iconId} size="large" />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        {renderIcon()}
        <View style={styles[styleName]}>
          <Text style={styles.text}>{mainText}</Text>
          {birthday && (
            <Text style={[styles.text]}>
              {moment(birthday).format("DD.MM.YYYY")} ({getAge(birthday!)})
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.statisticCard,
    marginHorizontal: 15,
    borderRadius: 15,
    height: 80,
    marginTop: 10,
    paddingTop: 5,
  },
  flagContainer: {
    flexDirection: "row",
  },
  textContainer: {
    top: -8,
    left: 15,
  },
  textContainerConstructor: {
    left: 15,
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default NationalityInformation;
