import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "./Header";
import Question from "./Question";

function Quiz() {
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

export default Quiz;
