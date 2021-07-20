import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default Appbar = ({ title, onClick }) => {
  return (
    <View style={styles.appbar}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onClick}>
        <FontAwesomeIcon icon={faSearch} size={20} color={Colors.textColor} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  appbar: {
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  title: {
    color: Colors.textColor,
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.2,
  },
});
