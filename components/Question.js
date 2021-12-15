import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { Card, Title, Paragraph } from "react-native-paper";

function Question() {
  const [checked, setChecked] = useState(0);

  return (
    <View>
      {/* <View style={styles.container}>
        <Text>This is a question</Text>
      </View> */}
      <Card style={styles.container}>
        <Card.Content>
          <Text style={styles.text}>
            {" "}
            This is a question bla bla bla bla bla bla bla bla bla bla This is a
            question bla bla bla bla bla bla bla bla bla bla This is a question
          </Text>
        </Card.Content>
      </Card>
      <Card style={styles.answersContainer}>
        <Card.Content>
          <View style={styles.answer}>
            <Text>PRima optiune</Text>
            <RadioButton
              status={checked === 1 ? "checked" : "unchecked"}
              uncheckedColor="black"
              onPress={() => {
                setChecked(1);
              }}
            />
          </View>
          <View style={styles.answer}>
            <Text>A doua optiune</Text>
            <RadioButton
              status={checked === 2 ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(2);
              }}
            />
          </View>
          <View style={styles.answer}>
            <Text>A treia optiune</Text>
            <RadioButton
              status={checked === 3 ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(3);
              }}
            />
          </View>
          <View style={styles.answer}>
            <Text>A treia optiune</Text>
            <RadioButton
              status={checked === 4 ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(4);
              }}
            />
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "30%",
    marginBottom: "2%",
    fontWeight: "bold",
  },
  answersContainer: {
    height: "50%",
  },
  text: {
    fontSize: 18,
  },
  answer: {
    display: "flex",
    height: "25%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "2%",
  },
});

export default Question;
