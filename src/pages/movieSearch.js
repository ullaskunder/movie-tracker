import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import Colors from "../constants/Colors";
import Sizes from "../constants/Sizes";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import MovieRatingCard from "../components/MovieRatingCard";
import Divider from "../components/Divider";
import FloatingActionButton from "../components/FloatingActionButton";
import { BottomSheet } from "react-native-elements";

export default MovieSearchPage = ({ route, navigation }) => {
  const movies = route.params.movies;
  const [text, setText] = useState("");
  const [filteredMovies, setFilterdMovies] = useState(movies);

  const searchMovies = (val) => {
    if (text) {
      const result = movies.filter((movie) => {
        const item = movie.title ? movie.title.toUpperCase() : "".toUpperCase();
        return item.indexOf(val.toUpperCase()) > -1;
      });
      setFilterdMovies(result);
      setText(val);
    } else {
      setFilterdMovies(movies);
      setText(val);
    }
  };

  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { title: "List Item 1" },
    { title: "List Item 2" },
    {
      title: "Cancel",
      containerStyle: { backgroundColor: "red" },
      titleStyle: { color: "white" },
      onPress: () => setIsVisible(false),
    },
  ];

  <BottomSheet
    isVisible={isVisible}
    containerStyle={{ backgroundColor: "rgba(0.5, 0.25, 0, 0.2)" }}
  >
    {list.map((l, i) => (
      <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
        <ListItem.Content>
          <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    ))}
  </BottomSheet>;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            color={Colors.textColor}
            size={16}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.textField}
          placeholderTextColor={Colors.textColor}
          placeholder="Search by movie name"
          onChangeText={(text) => searchMovies(text)}
          defaultValue={text}
        />
      </View>
      {filteredMovies.length > 0 ? (
        <FlatList
          data={filteredMovies}
          keyExtractor={(movie) => movie.id}
          renderItem={(movie) => (
            <View>
              <MovieRatingCard
                movie={movie.item}
                navigation={navigation}
                isClickable={true}
                isLiked={route.params.isLiked}
              />
              <Divider />
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Error></Error>
      )}
      <FloatingActionButton onClick={() => setIsVisible(!isVisible)} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accentColor,
    width: Sizes.width,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    padding: 20,
    height: 60,
    backgroundColor: "#0f0f0f",
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 40,
    borderRadius: 6,
  },
  textField: {
    color: Colors.textColor,
    fontSize: 16,
    marginLeft: 12,
  },
});
