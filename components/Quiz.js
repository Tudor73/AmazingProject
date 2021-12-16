import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Question from "./Question";
import { Button } from "react-native-paper";

function Quiz() {
  const onSubmit = () => {
    return null;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.h1}>Today's quiz</Text>
        <Icon name="settings" size={30} color="gray" style={styles.icon} />
      </View>
      <Question />
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => {
          return null;
        }}
      >
        Submit
      </Button>
    </View>
  );
}
export default Quiz;

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
