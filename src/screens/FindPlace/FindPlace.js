import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';
import { Navigation } from 'react-native-navigation';
import ModalExample from '../../UI/MenuBar/ModalExample';

class FindPlace extends Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Find Place'
        },
      }
    };
  }

  componentDidMount() {
    this.navigationEventListener = Navigation.events().bindComponent(this);
  }

  componentWillUnmount() {
    // Not mandatory
    if (this.navigationEventListener) {
      this.navigationEventListener.remove();
    }
  }

  navigationButtonPressed({ buttonId }) {
    // if(buttonId === 'sideDrawerToggle') {
    //   Navigation.push(this.props.componentId, {
    //     component: {
    //       name: 'navigation.SideDrawer'
    //     }
    //   });
    // }
  }

  itemSelectedHandler = key => {
    const selPlace = this.props.places.find(place => {
      return place.key === key;
    });

    Navigation.push(this.props.componentId, {
      component: {
        name: 'navigation.PlaceDetail',
        passProps: {
          selectedPlace: selPlace
        },
        options: {
          topBar: {
            title: {
              text: selPlace.name
            },
            subtitle: {
              text: 'Title',
              color: 'red',
              alignment: 'center'
            }
          }
        }
      }
    });
  };


  render() {
    return (
      <View>
        <ModalExample />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  }
}

export default connect(mapStateToProps)(FindPlace);
