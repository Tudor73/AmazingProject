import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card, Title, Paragraph } from "react-native-paper";

function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.item}
        onPress={() => {
          navigation.navigate("Quiz");
        }}
      >
        <Card>
          <Card.Content>
            <Text style={styles.text}>Quiz</Text>
          </Card.Content>
        </Card>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.item2}
        onPress={() => {
          navigation.navigate("Leaderboard");
        }}
      >
        <Card>
          <Card.Content>
            <Text style={styles.text}>Leaderboard</Text>
          </Card.Content>
        </Card>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.item}
        onPress={() => {
          navigation.navigate("Progress");
        }}
      >
        <Card>
          <Card.Content>
            <Text style={styles.text}>Compete</Text>
          </Card.Content>
        </Card>
      </TouchableHighlight>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    height: "90%",
    width: "90%",
    marginLeft: "5%",
    marginTop: "17%",
  },
  item: {
    // borderColor: "black",
    // borderWidth: 1,
    width: "50%",
    height: "20%",
  },
  text: {
    fontSize: 25,
    textAlign: "center",
  },
  item2: {
    // borderColor: "black",
    // borderWidth: 1,
    width: "50%",
    height: "20%",
    alignSelf: "flex-end",
  },
});
export default Home;
