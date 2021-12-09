import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Header />
      <View style={styles.container}></View>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "85%",
  },
});
