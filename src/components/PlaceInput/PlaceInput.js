import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import ButtonWithBackground from '../UI/ButtonWithBackground/ButtonWithBackground';
import DefaultInput from '../UI/DefaultInput/DefaultInput';

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <DefaultInput
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />
        <ButtonWithBackground onPress={this.placeSubmitHandler} color="#29aaf4">Add</ButtonWithBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%'
  }
});

export default PlaceInput;
