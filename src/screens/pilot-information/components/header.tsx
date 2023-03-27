import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { DriverStanding } from "../../../axois/data-pilots";
import Header from "../../../components/header";
import ControlIcons from "../../../icons/controls-icons";
import { colors } from "../../../style/colors";
import { textStyle } from "../../../style/style";

interface PilotInformationHeaderProps {
  navigation: any;
  pilotWikiId?: string;
  pilot: DriverStanding;
}

const PilotInformationHeader = ({
  navigation,
  pilotWikiId,
  pilot,
}: PilotInformationHeaderProps) => {
  const [imageUri, setImageUri] = useState("");

  useEffect(() => {
    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages&piprop=original&titles=${pilotWikiId}`
    )
      .then((response) => response.text())
      .then((result) => {
        setImageUri(JSON.parse(result).query.pages[0].original.source);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <View style={styles.container}>
      <Header title="Пилот" withBackButton navigtion={navigation}>
        <View style={styles.imageContainer}>
          {imageUri && (
            <Image
              style={styles.image}
              source={{
                uri: imageUri,
              }}
            />
          )}
          <View style={{ width: "auto", top: -15 }}>
            <Text style={styles.pilotID}> {pilot.Driver.code} </Text>
            <Text style={styles.pilotNumber}>{pilot.Driver.permanentNumber}</Text>
          </View>
        </View>
        <Text style={textStyle.headerWhite}>
          {pilot.Driver.givenName} {pilot.Driver.familyName}
        </Text>
      </Header>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    elevation: 4,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    height: 250,
  },
  image: {
    width: 120,
    height: 150,
    borderRadius: 35,
    resizeMode: "cover",
  },
  imageContainer: {
    top: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 25,
  },
  pilotID: {
    fontSize: 54,
    fontStyle: "italic",
    fontWeight: "700",
    textAlign: "center",
    color: colors.white,
    paddingStart: 5,
  },
  pilotNumber: {
    fontSize: 62,
    fontStyle: "italic",
    fontWeight: "700",
    color: colors.white,
    textAlign: "center",
  },
});

export default PilotInformationHeader;
