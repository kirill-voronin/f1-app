import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios, { PILOTS_STANDING } from "../axois/axios";
import { DriverStanding, MRDataPilotsStanding } from "../axois/data-pilots";
import ErrorComponent from "../components/error";
import Header from "../components/header";
import LoadingComponent from "../components/loading";
import PilotCard from "../components/cards/pilot-card";
import { getWikiId } from "../functions/getWikiId";

interface PilotsStandingProps {
  navigation: any;
}

export default function PilotsStanding({ navigation }: PilotsStandingProps) {
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

  const onPilotPressHandler = (pilot: DriverStanding) => {
    const pilotWikiId = getWikiId(pilot.Driver.url);

    navigation.navigate("PilotInformation", {
      pilotWikiId,
      pilot,
    });
  };

  const renderPilotCard = ({ item }: { item: DriverStanding }) => {
    const name = `${item.Driver.givenName} ${item.Driver.familyName}`;
    return (
      <TouchableOpacity key={`touch-${name}`} onPress={() => onPilotPressHandler(item)}>
        <PilotCard
          position={item.position}
          driverName={name}
          commandName={item?.Constructors?.[0]?.name ?? ""}
          points={item.points}
          nationality={item.Driver.nationality}
          commandId={item?.Constructors?.[0]?.constructorId ?? ""}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Зачет пилотов" />
      {isError && <ErrorComponent color="#fff" />}
      {!pilots && (
        <View style={styles.isLoadingContainer}>
          <Text style={styles.notData}>
            После начала сезона здесь будет отображаться личный зачет
          </Text>
        </View>
      )}
      <LoadingComponent isLoading={isLoading} />
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
