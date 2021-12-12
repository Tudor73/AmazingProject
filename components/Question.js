import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

function Question() {
  const [checked, setChecked] = useState(0);
  return (
    <View>
      <View style={styles.container}>
        <Text> Sa va dau muie cu drag!</Text>
      </View>
      <View style={styles.answersContainer}>
        <View style={styles.answer}>
          <Text>Multumesc!</Text>
          <RadioButton
            status={checked === 1 ? "checked" : "unchecked"}
            uncheckedColor="black"
            onPress={() => {
              setChecked(1);
            }}
          />
        </View>
        <View style={styles.answer}>
          <Text>Sa mil iei !</Text>
          <RadioButton
            status={checked === 2 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(2);
            }}
          />
        </View>
        <View style={styles.answer}>
          <Text>Buna treaba!</Text>
          <RadioButton
            status={checked === 3 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(3);
            }}
          />
        </View>
        <View style={styles.answer}>
          <Text>Sa tragi de el!</Text>
          <RadioButton
            status={checked === 4 ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(4);
            }}
          />
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
    height: "25%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Question;
