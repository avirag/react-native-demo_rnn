import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import ModalExample from '../../components/UI/MenuBar/ModalExample';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from '../../store/actions/index';

class SharePlace extends Component {
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  }

  render() {
    return (
      <View>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <ModalExample />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName))
  }
}

export default connect(null, mapDispatchToProps)(SharePlace);