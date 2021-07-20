import React from "react";
import { SafeAreaView, StyleSheet, View, FlatList } from "react-native";
import Colors from "../constants/Colors";
import Appbar from "../components/Appbar";
import MovieRatingCard from "../components/MovieRatingCard";
import Divider from "../components/Divider";
import { useSelector } from "react-redux";
import Error from "../components/Error";

export default LikedMoviePage = () => {
  const movies = useSelector((state) => state.movies.likedMovies);

  return (
    <SafeAreaView style={styles.container}>
      <Appbar title="Favorites" />

      {movies.length > 0 ? (
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
      ) : (
        <Error></Error>
      )}
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
