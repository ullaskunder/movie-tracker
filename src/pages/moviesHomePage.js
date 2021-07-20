import React, { useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Colors from "../constants/Colors";
import Appbar from "../components/Appbar";
import MovieCard from "../components/MovieCard";
import MovieDetailPage from "./movieDetails";
import MovieSearchPage from "./movieSearch";
import { createStackNavigator } from "@react-navigation/stack";
import Carousel from "../components/Carousel";
import Error from "../components/Error";

const Stack = createStackNavigator();

export default MovieHomePage = () => {
  const [movies, setMoives] = useState([]);
  const [categorizedMovies, setCategorizedMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://wookie.codesubmit.io/movies", {
        method: "GET",
        headers: new Headers({
          Authorization: "Bearer Wookie2019",
          "Content-Type": "application/json",
        }),
      });
      const json = await response.json();
      setLoading(false);
      setMoives(json.movies);
      setCategorizedMovies(
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
        <Appbar
          title="Movie Tracker"
          onClick={() => navigation.navigate("Search", { movies: movies })}
        />
        {loading ? (
          <ActivityIndicator
            size="large"
            color={Colors.primaryColor}
            style={{ alignItems: "center", flex: 1 }}
          />
        ) : (
          <ScrollView style={styles.body}>
            <Carousel movies={categorizedMovies} />
            {Object.keys(categorizedMovies).length > 0 ? (
              Object.keys(categorizedMovies).map((item, index) => {
                return (
                  <View key={index}>
                    <Text style={styles.categoryTitle}>{item} Movies</Text>
                    <FlatList
                      data={categorizedMovies[item]}
                      keyExtractor={(movie) => movie.id}
                      renderItem={(movie) => (
                        <MovieCard movie={movie.item} navigation={navigation} />
                      )}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                    />
                  </View>
                );
              })
            ) : (
              <Error></Error>
            )}
          </ScrollView>
        )}
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
      <Stack.Screen name="Search" component={MovieSearchPage} />
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
