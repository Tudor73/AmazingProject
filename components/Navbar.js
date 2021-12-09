import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Navbar() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.text}>page1</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.text}>page 2</Text>
      </View>
      <View>
        <Text style={styles.text}>page 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderTopWidth: 2,
    borderTopColor: "black",
    height: 30,
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
