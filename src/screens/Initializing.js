import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ImageBackground
} from 'react-native';
import backgroundImage from '../assets/background.jpg';
import ButtonWithBackground from '../components/UI/ButtonWithBackground/ButtonWithBackground';
import HeadingText from '../components/UI/HeadingText/HeadingText';
import DefaultInput from '../components/UI/DefaultInput/DefaultInput';
import ListItem from '../components/ListItem/ListItem';

class Initializing extends Component {
  state = {
    placeName: '',
    places: []
  }

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  }
  placeSubmitHandler = () => {
    if(this.state.placeName.trim() === '') {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(this.state.placeName)
      }
    });
  }

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem key={i} placeName={place}/>
    ));

    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <HeadingText>Please Log in</HeadingText>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="An awesome place"
              value={this.state.placeName}
              onChangeText={this.placeNameChangedHandler}
            />
          </View>
          <ButtonWithBackground onPress={this.placeSubmitHandler} color="#29aaf4">Click me!</ButtonWithBackground>
          <View style={styles.listContainer}>
            {placesOutput}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%'
  },
  backgroundImage: {
    width: '100%',
    flex: 1
  },
  listContainer: {
    width: '100%'
  }
});

export default Initializing;