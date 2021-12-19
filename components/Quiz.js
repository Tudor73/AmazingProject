import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Question from "./Question";
import { Button } from "react-native-paper";

function Quiz() {
  let questions = [
    {
      text: "asdasd",
      choices: ["optiune 1", "optiune2 ", "optiune3", "optiune4"],
      correctAnswer: 2,
    },
    {
      text: "question2",
      choices: ["optiune 1", "optiune2 ", "optiune3", "optiune4"],
      correctAnswer: 0,
    },
    {
      text: "question33333",
      choices: ["optiune 1231", "optiune212312 ", "optiune3233", "optiune4323"],
      correctAnswer: 3,
    },
  ];

  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Today's quiz</Text>
        <Icon name="settings" size={30} color="gray" style={styles.icon} />
      </View>
      <Question question={questions[index]} />
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => {
          if (index >= 2) {
            return null;
          }
          let indexCopy = index + 1;
          setIndex(indexCopy);
        }}
      >
        Submit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "95%",
    width: "90%",
    marginLeft: "5%",
    display: "flex",
    justifyContent: "space-between",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  h1: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 55,
  },
  icon: {
    alignSelf: "flex-end",
  },
  button: {
    width: "35%",
    position: "absolute",
    bottom: 40,
    right: 0,
  },
});

export default Quiz;
