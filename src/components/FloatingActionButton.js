import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Colors from "../constants/Colors";

export default FloatingActionButton = ({ onClick }) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.container}>
      <FontAwesomeIcon icon={faFilter} size={20} color={Colors.textColor} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: Colors.primaryColor,
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: 20,
    elevation: 5,
    zIndex: 10,
  },
});
