import { colors } from "./src/style/colors";
import { Platform, StatusBar, PermissionsAndroid, Alert } from "react-native";
import Navigation from "./src/screens/navigation";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  // const [expoPushToken, setExpoPushToken] = useState<string>();

  // async function registerForPushNotificationsAsync() {
  //   let token;

  //   // Создаем канал уведомлений
  //   if (Platform.OS === "android") {
  //     await Notifications.setNotificationChannelAsync("default", {
  //       name: "default",
  //       importance: Notifications.AndroidImportance.MAX,
  //       vibrationPattern: [0, 250, 250, 250],
  //       lightColor: "#FF231F7C",
  //     });
  //   }

  //   if (Device.isDevice) {
  //     // запрашиваем разрешение на отправку уведомлений
  //     const { status: existingStatus } = await Notifications.getPermissionsAsync();
  //     let finalStatus = existingStatus;
  //     if (existingStatus !== "granted") {
  //       const { status } = await Notifications.requestPermissionsAsync();
  //       finalStatus = status;
  //     }
  //     if (finalStatus !== "granted") {
  //       return;
  //     }
  //     // получаем токен устройства
  //     token = (await Notifications.getExpoPushTokenAsync()).data;
  //   }

  //   return token;
  // }

  // useEffect(() => {
  //   registerForPushNotificationsAsync().then((token) => setExpoPushToken(token));
  // });

  return (
    <>
      <Navigation />
      <StatusBar animated={true} backgroundColor={colors.primary} />
    </>
  );
}
