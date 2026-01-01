import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomePage from "./screens/HomePage";
import "./global.css";

export default function App() {
  return (
    <SafeAreaProvider>
      {/* Root */}
      <HomePage />

      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
