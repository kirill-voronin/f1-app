import { colors } from "./style/colors";
import { StatusBar } from "react-native";
import Navigation from "./screens/navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar animated={true} backgroundColor={colors.primary} />
    </>
  );
}
