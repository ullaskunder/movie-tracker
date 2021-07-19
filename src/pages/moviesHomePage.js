import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
} from "react-native";
import Colors from "../constants/Colors";
import Appbar from "../components/Appbar";
import MovieCard from "../components/MovieCard";

export default MovieHomePage = () => {
  const [movies, setMoives] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await fetch("https://wookie.codesubmit.io/movies", {
        method: "GET",
        headers: new Headers({
          Authorization: "Bearer Wookie2019",
          "Content-Type": "application/json",
        }),
      });
      const json = await response.json();
      setMoives(
        json.movies.reduce((prev, current) => {
          if (prev[current.classification] == null)
            prev[current.classification] = [];
          prev[current.classification].push(current);

          return prev;
        }, [])
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Appbar title="Movie Tracker" />

      <ScrollView style={styles.body}>
        {Object.keys(movies).map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.categoryTitle}>{item} Movies</Text>
              <FlatList
                data={movies[item]}
                keyExtractor={(movie) => movie.id}
                renderItem={(movie) => <MovieCard movie={movie.item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accentColor,
  },
  body: {
    paddingHorizontal: 20,
  },
  categoryTitle: {
    fontSize: 16,
    color: Colors.textColor,
    fontWeight: "bold",
  },
});
