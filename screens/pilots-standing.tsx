import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, ActivityIndicator, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios, { PILOTS_STANDING } from "../axois/axios";
import { DriverStanding, MRDataPilotsStanding } from "../axois/data-pilots";
import ErrorComponent from "../components/error";
import PilotCard from "../components/pilot-card";
import { colors } from "../style/colors";
import { textStyle } from "../style/style";

export default function PilotsStanding() {
  const [pilots, setPilots] = useState<DriverStanding[] | undefined>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(PILOTS_STANDING)
      .then((response) => {
        const thisNextRace: MRDataPilotsStanding = response.data;
        setPilots(thisNextRace.MRData.StandingsTable.StandingsLists[0]?.DriverStandings);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  const keyExtractor = (item: DriverStanding) => `pilot-${item.Driver.driverId}`;

  const renderPilotCard = ({ item }: { item: DriverStanding }) => {
    const name = `${item.Driver.givenName} ${item.Driver.familyName}`;
    return (
      <PilotCard
        position={item.position}
        driverName={name}
        commandName={item.Constructors[0].name}
        points={item.points}
        nationality={item.Driver.nationality}
        commandId={item.Constructors[0].constructorId}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={textStyle.headerWhite}>Рейтинг пилотов</Text>
      </View>
      {isError && <ErrorComponent color="#fff" />}
      {!pilots && (
        <View style={styles.isLoadingContainer}>
          <Text style={styles.notData}>
            После начала сезона здесь будет отображаться личный зачет
          </Text>
        </View>
      )}
      {isLoading && (
        <View style={styles.isLoadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
      {pilots?.length != 0 && (
        <FlatList
          data={pilots}
          keyExtractor={keyExtractor}
          renderItem={renderPilotCard}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#1E1E1E",
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
  notData: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
});
