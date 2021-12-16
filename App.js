import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Leaderboard from "./pages/Leaderboard";
import Progress from "./pages/Progress";
import Quiz from "./components/Quiz";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
        <Stack.Screen name="Progress" component={Progress} />
        <Stack.Screen name="Quiz" component={Quiz} />
      </Stack.Navigator>
      <Navbar />
    </NavigationContainer>
  );
}
