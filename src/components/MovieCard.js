import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default MovieCard = ({ movie, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Details", { movie: movie })}
    >
      <ImageBackground
        style={styles.movieCard}
        source={{
          uri: movie.poster,
        }}
        resizeMode="cover"
        imageStyle={{ borderRadius: 4, opacity: 0.6 }}
      >
        <View style={styles.textContainer}>
          <Text style={styles.movieName}>{movie.title}</Text>
          <View style={styles.ratingContainer}>
            <FontAwesomeIcon icon={faStar} color={Colors.starColor} size={14} />
            <Text style={styles.movieRating}>{movie.imdb_rating}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  movieCard: {
    width: 120,
    height: 140,
    marginTop: 12,
    borderRadius: 20,
    borderRadius: 10,
    marginBottom: 20,
    marginRight: 20,
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 10,
  },
  movieName: {
    fontSize: 14,
    color: Colors.textColor,
    fontWeight: "bold",
  },
  movieRating: {
    fontSize: 14,
    color: Colors.textColor,
    fontWeight: "bold",
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
});
