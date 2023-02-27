import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { getCorrectPilotWikiId } from "../../functions/isRedirect";
import PilotInformationHeader from "./components/header";
import NationalityInformation from "./components/nationality-information";

interface PilotInformaionScreenProps {
  navigation: any;
  route: any;
}

const PilotInformationScreen = ({ navigation, route }: PilotInformaionScreenProps) => {
  const pilot = route.params?.pilot;
  const pilotWikiId = route.params?.pilotWikiId || "";
  const [correctPilotWikiId, setCorrectPilotWikiId] = useState<string>();

  useEffect(() => {
    fetch(
      `https://en.wikipedia.org/w/api.php?action=parse&page=${pilotWikiId}&format=json&prop=wikitext`
    )
      .then((response) => response.text())
      .then((result) => {
        setCorrectPilotWikiId(
          getCorrectPilotWikiId(pilotWikiId, JSON.parse(result).parse.wikitext["*"])
        );
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <View style={styles.container}>
      {correctPilotWikiId && (
        <>
          <PilotInformationHeader
            navigation={navigation}
            pilotWikiId={correctPilotWikiId}
            pilot={pilot}
          />
          <NationalityInformation pilot={pilot} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#1E1E1E",
  },
});

export default PilotInformationScreen;
