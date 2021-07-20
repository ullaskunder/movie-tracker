import React from "react";
import { SafeAreaView, StyleSheet, View, FlatList } from "react-native";
import Colors from "../constants/Colors";
import Appbar from "../components/Appbar";
import MovieRatingCard from "../components/MovieRatingCard";
import Divider from "../components/Divider";
import { useDispatch, useSelector } from "react-redux";

export default LikedMoviePage = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.likedMovies);

  return (
    <SafeAreaView style={styles.container}>
      <Appbar title="Favorites" />

      <FlatList
        data={movies}
        keyExtractor={(movie) => movie.id}
        renderItem={(movie) => (
          <View>
            <MovieRatingCard movie={movie.item} isLiked={true} />
            <Divider />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accentColor,
    paddingHorizontal: 4,
  },
});
