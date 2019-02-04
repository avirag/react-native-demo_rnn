import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import AuthScreen from '../screens/Auth/Auth';
import FindPlace from '../screens/FindPlace/FindPlace';
import SharePlace from '../screens/SharePlace/SharePlace';
import PlaceDetail from '../screens/PlaceDetail/PlaceDetail';
import UserSearch from '../screens/UserSearch/UserSearch';
import SideDrawer from '../screens/SideDrawer/SideDrawer';
import MenuBar from '../components/UI/MenuBar/MenuBar';

import configureStore from '../store/configureStore';

const store = configureStore();


export default function registerScreens() {
  // Navigation.registerComponent(
  //   'navigation.Initializing',
  //   () => props => (
  //     <Provider store={store}>
  //       <Initializing {...props} />
  //     </Provider>
  //   )
  // );

  Navigation.registerComponent(
    'navigation.AuthScreen',
    () => props => (
      <Provider store={store}>
        <AuthScreen {...props} />
      </Provider>
    )
  );

  Navigation.registerComponent(
    'navigation.FindPlace',
    () => props => (
      <Provider store={store}>
        <FindPlace {...props} />
      </Provider>
    )
  );

  Navigation.registerComponent(
    'navigation.SharePlace',
    () => props => (
      <Provider store={store}>
        <SharePlace {...props} />
      </Provider>
    )
  );

  Navigation.registerComponent(
    'navigation.PlaceDetail',
    () => props => (
      <Provider store={store}>
        <PlaceDetail {...props} />
      </Provider>
    )
  );

  Navigation.registerComponent(
    'navigation.SideDrawer',
    () => SideDrawer
  );

  Navigation.registerComponent(
    'navigation.MenuBar',
    () => MenuBar
  );

  Navigation.registerComponent(
    'navigation.UserSearch',
    () => UserSearch
  );
}