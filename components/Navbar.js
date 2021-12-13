import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

function Navbar() {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        activeOpacity={0.8}
        underlayColor="#777"
        style={styles.item}
        onPress={() => {
          return null;
        }}
      >
        <View>
          <Text style={styles.text}>progress</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#777"
        style={styles.item}
        onPress={() => {
          return null;
        }}
      >
        <View>
          <Text style={styles.text}>home</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#777"
        style={styles.item}
        onPress={() => {
          return null;
        }}
      >
        <View>
          <Text style={styles.text}>leaderboard</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderTopWidth: 2,
    borderTopColor: "black",
    height: 35,
  },
  item: {
    borderRightColor: "black",
    backgroundColor: "#999",
    width: "33%",
    height: "100%",
  },
  text: {
    paddingTop: 4,
    textAlign: "center",
  },
});
export default Navbar;
