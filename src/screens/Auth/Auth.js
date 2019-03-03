import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import HeaderText from '../../components/UI/HeaderText/HeaderText';
import startMainTabs from '../startMainTabs';
import RNPickerSelect from 'react-native-picker-select';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const sports = [
  {
    label: 'Football',
    value: 'football'
  },
  {
    label: 'Baseball',
    value: 'baseball'
  },
  {
    label: 'Hockey',
    value: 'hockey'
  },
];

class AuthScreen extends Component {
  state = {
    level: null
  };

  loginHandler = () => {
    startMainTabs();
  }

  render() {
    const placeholder = {
      label: 'Select a sport...',
      value: null
    };

    return (
      <View style={styles.container}>
        <HeaderText>Auth Screen</HeaderText>
        <View style={styles.loginButtonContainer}>
          <RNPickerSelect
            placeholder={placeholder}
            items={sports}
            onValueChange={value => {
              this.setState({ level: value });
            }}
            style={{
              inputAndroid: {
                backgroundColor: 'transparent',
                color: 'black'
              },
              iconContainer: {
                top: 15,
                right: 8,
              },
            }}
            value={this.state.level}
            useNativeAndroidPickerStyle={false}
            textInputProps={{ underlineColorAndroid: 'blue' }}
            Icon={() => {
              return <MaterialIcons
                name='arrow-drop-down'
                size={22}
                color='blue'
              />;
            }}
          />
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