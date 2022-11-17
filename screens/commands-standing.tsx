import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";
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
  const [constructors, setConstructors] = useState<ConstructorStanding[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get(CONSTRUCTORS_STANDING).then((response) => {
      const constructors: MRDataConstructorsStanding = response.data;
      setConstructors(
        constructors.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
      );
      setIsLoading(false);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={textStyle.headerWhite}>Рейтинг конструкторов</Text>
      </View>
      {isLoading && (
        <View style={styles.isLoadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
      {constructors.length != 0 && (
        <ScrollView>
          {constructors.map((constructor, index) => {
            return (
              <CommandCard
                key={index}
                position={constructor.position}
                commandName={constructor.Constructor.name}
                points={constructor.points}
                nationality={constructor.Constructor.nationality}
                commandId={constructor.Constructor.constructorId}
                engine={""}
              />
            );
          })}
        </ScrollView>
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
  },
});
