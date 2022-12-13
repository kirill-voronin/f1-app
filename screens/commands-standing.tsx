import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, ActivityIndicator, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios, { CONSTRUCTORS_STANDING } from "../axois/axios";
import {
  ConstructorStanding,
  MRDataConstructorsStanding,
} from "../axois/data-constructors";
import CommandCard from "../components/command-card";
import { colors } from "../style/colors";
import { textStyle } from "../style/style";

export default function ConstructorsStanding() {
  const [constructors, setConstructors] = useState<ConstructorStanding[] | undefined>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(CONSTRUCTORS_STANDING).then((response) => {
      const constructors: MRDataConstructorsStanding = response.data;
      setConstructors(
        constructors.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings
      );
      setIsLoading(false);
    });
  }, []);

  const keyExtractor = (item: ConstructorStanding) =>
    `constructor-${item.Constructor.constructorId}`;

  const renderConstructorCard = ({ item }: { item: ConstructorStanding }) => {
    return (
      <CommandCard
        position={item.position}
        commandName={item.Constructor.name}
        points={item.points}
        nationality={item.Constructor.nationality}
        commandId={item.Constructor.constructorId}
        engine={""}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={textStyle.headerWhite}>Рейтинг конструкторов</Text>
      </View>
      {!constructors && (
        <View style={styles.isLoadingContainer}>
          <Text style={styles.notData}>
            После начала сезона здесь будет отображаться кубок конструкторов
          </Text>
        </View>
      )}
      {isLoading && (
        <View style={styles.isLoadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
      {constructors?.length != 0 && (
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
  header: {
    height: 60,
    backgroundColor: colors.primary,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: "center",
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
