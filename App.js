import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlayCircle, faHeart } from "@fortawesome/free-solid-svg-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "./src/constants/Colors";

/** Import Pages */
import MovieHomePage from "./src/pages/moviesHomePage";
import LikedMoviePage from "./src/pages/moviesLiked";
import { StatusBar } from "react-native";

/** Screens Name */
const movieHomeName = "Movies";
const likedMovieName = "Favorite";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent />
      <Tab.Navigator
        initialRouteName={movieHomeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case movieHomeName:
                iconName = faPlayCircle;
                break;
              case likedMovieName:
                iconName = faHeart;
                break;
            }
            return (
              <FontAwesomeIcon icon={iconName} size={size} color={color} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.primaryColor,
          inactiveTintColor: "white",
          labelStyle: {
            paddingBottom: 10,
            fontSize: 12,
          },

          style: {
            padding: 10,
            height: 60,
            backgroundColor: Colors.accentColor,
            borderTopColor: "grey",
          },
        }}
      >
        <Tab.Screen name={movieHomeName} component={MovieHomePage} />
        <Tab.Screen name={likedMovieName} component={LikedMoviePage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
