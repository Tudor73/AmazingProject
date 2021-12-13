import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Navbar() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>Progress</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>Home</Text>
      </View>
      <View>
        <Text style={styles.text}>Leaderbord</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 2,
    borderTopColor: "black",
    height: 70,
  },
  item: {
    borderRightColor: "black",
    borderRightWidth: 2,
    width: "23%",
  },
  text: {
    marginTop: 2,
  },
});

export default Navbar;
