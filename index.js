/** @format */

import { Navigation } from "react-native-navigation";
import { registerScreens } from "./src/navigation/screens";
// import configureStore from "./src/store/configureStore";

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.Initializing"
      }
    }
  });
});
