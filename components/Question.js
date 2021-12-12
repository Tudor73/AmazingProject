import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";

function Question() {
  return (
    <View>
      <View style={styles.container}>
        <Text>This is a question</Text>
      </View>
      <View style={styles.answersContainer}>
        <View style={styles.answer}>
          <Text>PRima optiune</Text>
          <RadioButton status="checked" value="" />
        </View>
        <View style={styles.answer}>
          <Text>A doua optiune</Text>
          <RadioButton status="checked" value="" />
        </View>
        <View style={styles.answer}>
          <Text>A treia optiune</Text>
          <RadioButton status="checked" value="" />
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
    marginBottom: "2%",
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
