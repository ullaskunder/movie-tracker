import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
} from "react-native";
import Colors from "../constants/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { showToast } from "../utils/showToast";

export default MovieRatingCard = ({ movie, isLiked }) => {
  const [liked, setLiked] = useState(isLiked);
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 10,
        alignItems: "center",
      }}
    >
      <ImageBackground
        source={{ uri: movie.poster }}
        style={{ height: 90, width: 70 }}
        imageStyle={{ borderRadius: 6 }}
      />
      <View style={{ marginLeft: 12 }}>
        <Text
          style={{
            color: Colors.textColor,
            fontWeight: "bold",
            fontSize: 14,
          }}
        >
          {movie.title}
        </Text>
        <Text style={styles.subTitle}>IMDB Rating ★ {movie.imdb_rating}</Text>
        <Text style={styles.subTitle}>{movie.genres.join(" - ")}</Text>
        <Text style={styles.subTitle}>Category {movie.classification}</Text>
      </View>
      <View style={styles.likeButton}>
        <TouchableOpacity
          onPress={() => {
            showToast(
              !liked
                ? `${movie.title} added to favorite`
                : `${movie.title} removed from favorite`
            );
            setLiked(!liked);
          }}
        >
          <FontAwesomeIcon
            icon={faStar}
            color={liked ? Colors.starColor : "grey"}
            size={22}
            style={{ marginBottom: 4 }}
          />
        </TouchableOpacity>
        <Text style={styles.subTitle}>Add to Favorite</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subTitle: { color: "grey", fontSize: 12, marginTop: 4 },
  likeButton: {
    position: "absolute",
    right: 0,
    padding: 20,
    alignItems: "center",
  },
});
