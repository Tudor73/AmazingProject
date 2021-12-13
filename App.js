import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Leaderbord from "./pages/Leaderbord";
import Progress from "./pages/Progress";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Leaderbord" component={Leaderbord} />
        <Stack.Screen name="Prgoress" component={Progress} />
      </Stack.Navigator>
      <Navbar />
    </NavigationContainer>
  );
}
