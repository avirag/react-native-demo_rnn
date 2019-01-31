import { Navigation } from 'react-native-navigation';
import Initializing from '../screens/Initializing';

export function registerScreens() {
  Navigation.registerComponent('navigation.Initializing', () => Initializing);
}