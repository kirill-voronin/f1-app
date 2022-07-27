import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { textStyle } from '../style/style';
import NextRace from './next-race/next-race';

export default function Header() {
  return (
    <View style={styles.header}>
       <StatusBar
        animated={true}
        backgroundColor="red"
        style="light"
      />
      <Text style={styles.season}>
        Сезон 2022
      </Text>
      <NextRace />
      <Text style={[styles.progress, textStyle.header]}>
        В разработке
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FF0000",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    height: "50%",
  },
  season: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: '700',
    color: "#FFFFFF",
    marginTop: 25
  },
  progress: {
    marginTop: 100,
    textAlign: "center",
  },
});
