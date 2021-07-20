import React from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import Colors from "../constants/Colors";
import Sizes from "../constants/Sizes";

export default Carousel = ({ movies, navigation }) => {
  return (
    <View style={styles.container}>
      <SwiperFlatList
        autoplay
        autoplayDelay={3}
        autoplayLoop
        index={2}
        showPagination
        data={movies["7+"]}
        paginationStyleItem={{ height: 10, width: 10 }}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Details", { movie: item })}
          >
            <ImageBackground
              source={{ uri: item.backdrop }}
              style={styles.headerImage}
              resizeMode="stretch"
              imageStyle={{ opacity: 0.8, borderRadius: 6 }}
            />
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.accentColor,
    height: 150,
    marginBottom: 20,
    borderRadius: 6,
  },
  headerImage: {
    width: Sizes.width,
    height: 250,
    padding: 20,
    marginBottom: 20,
  },
});
