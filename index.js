import React from "react";
import "react-native-gesture-handler";
import { registerRootComponent } from "expo";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import App from "./App";

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(ReduxApp);
