import React from "react";
import { View, Text } from "react-native";
import Header from "./components/Header";
import Question from "./components/Question";

function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Question />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "99%",
    display: "flex",
    justifyContent: "space-between",
  },
});
