import { Navigation } from 'react-native-navigation';
import registerScreens from './src/navigation/screens'

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'navigation.AuthScreen'
      }
    }
  });
});

// Subscribe
// const navigationButtonEventListener = Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {

// });