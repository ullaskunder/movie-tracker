import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import Colors from "../constants/Colors";

export default Error = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image style={styles.cover} source={require("../assets/empty.png")} />
      <Text style={styles.title}>No movies found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cover: {
    width: 180,
    height: 180,
    resizeMode: "cover",
  },
  title: {
    color: Colors.textColor,
    fontSize: 16,
    fontWeight: "bold",
  },
});
