import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

function Question() {
  return (
    <View>
      <View style={styles.container}>
        <Text> Sa va dau muie cu drag!</Text>
      </View>
      <View style={styles.answersContainer}>
        <View styles={styles.answer}>
          <Text>Multumesc!</Text>
          <RadioButton status="checked" />
        </View>
        <View styles={styles.answer}>
          <Text>Sa mil iei !</Text>
          <RadioButton status="checked" />
        </View>
        <View styles={styles.answer}>
          <Text>Buna treaba!</Text>
          <RadioButton status="checked" />
        </View>
        <View styles={styles.answer}>
          <Text>Sa tragi de el!</Text>
          <RadioButton status="checked" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: "20%",
    borderWidth: 2,
    borderColor: "black",
    marginLeft: "10%",
  },
  answersContainer: {
    width: "80%",
    height: "50%",
    borderWidth: 2,
    borderColor: "black",
    marginLeft: "10%",
  },
  answer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Question;
