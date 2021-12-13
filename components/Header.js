import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

function Header() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.h1}>Today's quiz</Text>
        <Icon name="settings" size={30} color="gray" style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 55,
  },
  container: {
    width: "80%",
    marginLeft: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    alignSelf: "flex-end",
  },
});
export default Header;
