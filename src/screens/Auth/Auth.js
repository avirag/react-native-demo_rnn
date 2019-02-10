import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import HeaderText from '../../components/UI/HeaderText/HeaderText';
import startMainTabs from '../startMainTabs';


class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderText>Auth Screen</HeaderText>
        <View style={styles.loginButtonContainer}>
          <Button containerViewStyle={styles.loginButton} title="Login" onPress={this.loginHandler} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center'
  },
  loginButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '80%'
  }
});

export default AuthScreen;