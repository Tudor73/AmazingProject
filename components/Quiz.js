import React from "react";
import { Text, View } from "react-native";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Question from "./components/Question";

function Quiz() {
  return (
    <View style={styles.container}>
      <Header />
      <Question />
      <Navbar />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
});
