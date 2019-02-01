import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  ImageBackground
} from 'react-native';
import backgroundImage from '../assets/background.jpg';
import HeadingText from '../components/UI/HeadingText/HeadingText';
import PlaceInput from "../components/PlaceInput/PlaceInput";
import PlaceList from "../components/PlaceList/PlaceList";
import PlaceDetail from "./PlaceDetail/PlaceDetail";
import placeImage from "../assets/beautiful-place.jpg"

class Initializing extends Component {
  state = {
    places: [],
    selectedPlace: null
  }

  placeAddedHandler = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          image: placeImage
        })
      }
    })
  }

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => place.key !== prevState.selectedPlace.key),
        selectedPlace: null
      }
    });
  }

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <HeadingText>Please Log in</HeadingText>
          <PlaceDetail
            selectedPlace={this.state.selectedPlace}
            onItemDeleted={this.placeDeletedHandler}
            onModalClosed={this.modalClosedHandler}
          />
          <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
          <PlaceList
            places={this.state.places}
            onItemSelected={this.placeSelectedHandler}
          />
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
  backgroundImage: {
    width: '100%',
    flex: 1
  }
});

export default Initializing;