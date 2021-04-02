import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ListItems from "./Screens/ListItems";

export default function App() {
  return (
    <View style={styles.container}>
      <ListItems />
      {/* <HomeScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F77828",
    alignItems: "center",
    justifyContent: "center",
  },
});
