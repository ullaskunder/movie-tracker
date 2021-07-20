import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Colors from "../constants/Colors";
import Sizes from "../constants/Sizes";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import Moment from "moment";
import Button from "../components/Button";
import MovieRatingCard from "../components/MovieRatingCard";

export default MovieDetailPage = ({ navigation, route }) => {
  const movie = route.params.movie;
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header Image */}
        <ImageBackground
          source={{ uri: movie.backdrop }}
          style={styles.headerImage}
          resizeMode="stretch"
          imageStyle={{ opacity: 0.5 }}
        >
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                color={Colors.textColor}
                size={16}
              />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>{movie.title}</Text>
          </View>
          <View style={styles.headerBottom}>
            <TouchableOpacity onPress={() => {}}>
              <FontAwesomeIcon
                icon={faPlayCircle}
                color={Colors.textColor}
                size={24}
              />
            </TouchableOpacity>
            <View style={{ marginLeft: 12 }}>
              <Text style={{ color: Colors.textColor, fontWeight: "bold" }}>
                Watch Now
              </Text>
              <Text
                style={{
                  color: Colors.textColor,
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                {movie.length}
              </Text>
            </View>
          </View>
        </ImageBackground>
        {/* Movie Rating Card */}
        <MovieRatingCard movie={movie} />
        {/* Movie Details */}
        <Text style={styles.paragraph}>{movie.overview}</Text>
        <Text style={styles.footerText}>Movie Director - {movie.director}</Text>
        <Text style={styles.footerText}>
          Movie Cast - {movie.cast.join(", ")}
        </Text>
        <Text style={styles.footerText}>
          Release Date - {Moment(movie.released_on).format("d MMM yyyy")}
        </Text>
        {/* Watch Now Button */}
        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <Button>Watch Now</Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accentColor,
  },
  headerImage: {
    width: Sizes.width,
    height: 250,
    padding: 20,
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.textColor,
    marginLeft: 12,
  },
  headerBottom: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 20,
  },
  subTitle: { color: "grey", fontSize: 12, marginTop: 4 },
  paragraph: {
    color: "#cfcfcf",
    fontSize: 13,
    paddingHorizontal: 10,
    textAlign: "justify",
    marginVertical: 20,
  },
  footerText: {
    color: "grey",
    fontSize: 14,
    paddingLeft: 10,
    marginTop: 2,
  },
});
