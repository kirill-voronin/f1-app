import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import axios, { CONSTRUCTORS_STANDING } from "../axois/axios";
import {
  ConstructorStanding,
  MRDataConstructorsStanding,
} from "../axois/data-constructors";
import ConstructorCard from "../components/cards/command-card";
import ErrorComponent from "../components/error";
import Header from "../components/header";
import LoadingComponent from "../components/loading";
import { getWikiId } from "../functions/getWikiId";
import { colors } from "../style/colors";

interface ConstructorStandingProps {
  navigation: any;
}

export default function ConstructorsStanding({ navigation }: ConstructorStandingProps) {
  const [constructors, setConstructors] = useState<ConstructorStanding[] | undefined>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(CONSTRUCTORS_STANDING)
      .then((response) => {
        const constructors: MRDataConstructorsStanding = response.data;
        setConstructors(
          constructors.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings,
        );
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  const keyExtractor = (item: ConstructorStanding) =>
    `constructor-${item.Constructor.constructorId}`;

  const onConstructorPressHandler = (constructor: ConstructorStanding) => {
    const constructorWikiId = getWikiId(constructor.Constructor.url);

    navigation.navigate("ConstructorInformation", { constructorWikiId, constructor });
  };

  const renderConstructorCard = ({ item }: { item: ConstructorStanding }) => {
    return (
      <TouchableOpacity
        key={`touch-${item.Constructor.name}`}
        onPress={() => onConstructorPressHandler(item)}>
        <ConstructorCard
          position={item.position}
          commandName={item.Constructor.name}
          points={item.points}
          nationality={item.Constructor.nationality}
          commandId={item.Constructor.constructorId}
          engine={""}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Кубок конструкторов"></Header>
      {isError && <ErrorComponent color="#fff" />}
      {!constructors && (
        <View style={styles.isLoadingContainer}>
          <Text style={styles.notData}>
            После начала сезона здесь будет отображаться кубок конструкторов
          </Text>
        </View>
      )}
      <LoadingComponent isLoading={isLoading} />
      {constructors?.length !== 0 && (
        <FlatList
          data={constructors}
          keyExtractor={keyExtractor}
          renderItem={renderConstructorCard}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: colors.secondary,
  },
  isLoadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: 4,
  },
  notData: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
});
