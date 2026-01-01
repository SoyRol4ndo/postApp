import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomePage from "./screens/HomePage";
import "./global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {

  const queryClient = new QueryClient()
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        {/* Root */}
        <HomePage />


      <StatusBar style="auto" />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
