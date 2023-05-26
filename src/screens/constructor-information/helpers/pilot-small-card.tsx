import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../../../style/colors";
import { getCorrectPilotWikiId } from "../../../functions/isRedirect";
import { getWikiId } from "../../../functions/getWikiId";
import { textStyle } from "../../../style/style";

export interface PilotSmallCardProps {
  code?: string;
  number?: string;
  pilotUri?: string;
}

const PilotSmallCard = ({ code, pilotUri, number }: PilotSmallCardProps) => {
  const pilotWikiId = getWikiId(pilotUri || "");
  const [imageUri, setImageUri] = useState<string>("");
  const [correctPilotWikiId, setCorrectPilotWikiId] = useState<string>();

  useEffect(() => {
    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages&piprop=original&titles=${pilotWikiId}`
    )
      .then((response) => response.text())
      .then((result) => {
        setImageUri(JSON.parse(result).query.pages[0].original.source);
      })
      .catch((error) => console.log("error", error));
  }, [correctPilotWikiId]);

  useEffect(() => {
    fetch(
      `https://en.wikipedia.org/w/api.php?action=parse&page=${pilotWikiId}&format=json&prop=wikitext`
    )
      .then((response) => response.text())
      .then((result) => {
        setCorrectPilotWikiId(
          getCorrectPilotWikiId(pilotWikiId, JSON.parse(result).parse.wikitext["*"])
        );
        console.log(
          getCorrectPilotWikiId(pilotWikiId, JSON.parse(result).parse.wikitext["*"])
        );
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {imageUri && (
          <Image
            style={styles.image}
            source={{
              uri: imageUri,
            }}
          />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={[textStyle.headerWhite]}>
          {number} {code}
        </Text>
      </View>
    </View>
  );
};

export default PilotSmallCard;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: colors.statisticCard,
    height: 170,
  },
  image: {
    width: 100,
    height: 120,
    borderRadius: 15,
    resizeMode: "cover",
  },
  imageContainer: {
    top: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 25,
  },
  textContainer: {
    top: 10,
  },
});
