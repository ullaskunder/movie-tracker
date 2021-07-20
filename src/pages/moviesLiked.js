import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";
import Appbar from "../components/Appbar";
import MovieRatingCard from "../components/MovieRatingCard";
import Divider from "../components/Divider";

export default LikedMoviePage = () => {
  const movie = {
    backdrop:
      "https://wookie.codesubmit.io/static/backdrops/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    classification: "13+",
    director: "Christopher Nolan",
    genres: ["Action", "Crime", "Drama"],
    id: "d6822b7b-48bb-4b78-ad5e-9ba04c517ec8",
    imdb_rating: 9.0,
    length: "2h 32min",
    overview:
      "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    poster:
      "https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg",
    released_on: "2008-07-16T00:00:00",
    slug: "the-dark-knight-2008",
    title: "The Dark Knight",
  };
  return (
    <SafeAreaView style={styles.container}>
      <Appbar title="Favorites" />
      <MovieRatingCard movie={movie} isLiked={true} />
      <Divider />
      <MovieRatingCard movie={movie} isLiked={true} />
      <Divider />
      <MovieRatingCard movie={movie} isLiked={true} />
      <Divider />
      <MovieRatingCard movie={movie} isLiked={true} />
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
