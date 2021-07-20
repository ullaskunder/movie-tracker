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
import { BottomSheet, ListItem } from "react-native-elements";
import Data from "../constants/Data";

export default MovieSearchPage = ({ route, navigation }) => {
  const movies = route.params.movies;
  const [text, setText] = useState("");
  const [filteredMovies, setFilterdMovies] = useState(movies);
  const [isVisible, setIsVisible] = useState(false);

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

  const sortMovies = (type) => {
    setIsVisible(false);
    if (type !== "NONE") {
      setFilterdMovies(
        filteredMovies.sort(
          (a, b) =>
            parseFloat((type == "ASC" ? a : b).imdb_rating) -
            parseFloat((type == "ASC" ? b : a).imdb_rating)
        )
      );
    }
  };

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
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{ backgroundColor: "rgba(0.5, 0.25, 0, 0.2)" }}
      >
        {Data.filterBottomSheetData.map((filterData, i) => (
          <ListItem
            key={i}
            containerStyle={filterData.containerStyle}
            onPress={() => sortMovies(filterData.type)}
          >
            <ListItem.Content>
              <ListItem.Title style={filterData.titleStyle}>
                {filterData.title}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
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
