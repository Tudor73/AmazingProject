import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

function Header() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.h1}>Today's Quiz</Text>
        <Icon name="settings" size={40} color="gray" style={styles.icon} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontWeight: "bold",
    fontSize: 42,
  },
  container: {
    width: "80%",
    margin: "auto",
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
