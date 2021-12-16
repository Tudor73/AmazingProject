import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card, Title, Paragraph } from "react-native-paper";

function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Card style={styles.item}>
        <Card.Content>
          <TouchableHighlight
            underlayColor=""
            onPress={() => {
              navigation.navigate("Quiz");
            }}
          >
            <Text style={styles.text}>Quiz</Text>
          </TouchableHighlight>
        </Card.Content>
      </Card>

      <Card style={styles.item2}>
        <Card.Content>
          <TouchableHighlight
            underlayColor=""
            onPress={() => {
              navigation.navigate("Leaderboard");
            }}
          >
            <Text style={styles.text}>Leaderboard</Text>
          </TouchableHighlight>
        </Card.Content>
      </Card>

      <Card style={styles.item}>
        <Card.Content>
          <TouchableHighlight
            underlayColor=""
            onPress={() => {
              navigation.navigate("Leaderboard");
            }}
          >
            <Text style={styles.text}>Compete</Text>
          </TouchableHighlight>
        </Card.Content>
      </Card>
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
