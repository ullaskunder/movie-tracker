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
import MovieDetailPage from "./movieDetails";
import { createStackNavigator } from "@react-navigation/stack";
import Carousel from "../components/Carousel";

const Stack = createStackNavigator();

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

  const MoviePage = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <Appbar title="Movie Tracker" />

        <ScrollView style={styles.body}>
          <Carousel movies={movies} />
          {Object.keys(movies).map((item, index) => {
            return (
              <View key={index}>
                <Text style={styles.categoryTitle}>{item} Movies</Text>
                <FlatList
                  data={movies[item]}
                  keyExtractor={(movie) => movie.id}
                  renderItem={(movie) => (
                    <MovieCard movie={movie.item} navigation={navigation} />
                  )}
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
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={MoviePage} />
      <Stack.Screen name="Details" component={MovieDetailPage} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accentColor,
  },
  body: {
    paddingHorizontal: 10,
  },
  categoryTitle: {
    fontSize: 16,
    color: Colors.textColor,
    fontWeight: "bold",
  },
});
