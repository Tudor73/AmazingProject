import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Navbar />
    </View>
  );
}
