import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import Appbar from "../components/Appbar";

export default LikedMoviePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Appbar title="Favorites" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accentColor,
  },
});
