import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {height} = Dimensions.get('window');

class SlideUpDemo extends Component {
  state = {
    visible: false,
    allowDragging: true
  }

  draggableRange = {
    top: height / 1.75,
    bottom: 120
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hello</Text>
        <Text>Some other text</Text>
        <TouchableOpacity onPress={() => this.setState({visible: true})} style={styles.showIndicator}>
          <View style={{ backgroundColor: '#ff867c' }}>
            <MaterialCommunityIcons
              size={28}
              color='grey'
              name="chevron-up"
              style={{ textAlign: 'center' }}
            />
          </View>
        </TouchableOpacity>
        <SlidingUpPanel
          ref={c => (this._panel = c)}
          visible={this.state.visible}
          allowDragging={this.state.allowDragging}
          draggableRange={this.draggableRange}
          onRequestClose={() => this.setState({visible: false})}>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => this.setState({visible: false})} style={styles.hideIndicator}>
              <View style={{ backgroundColor: '#ff867c' }}>
                <MaterialCommunityIcons
                size={28}
                color='grey'
                name="chevron-down"
                style={{ textAlign: 'center' }}
              />
              </View>
            </TouchableOpacity>
            <View style={{ width: '100%' }}>
              <MaterialCommunityIcons
                size={22}
                color='#b61827'
                name="arrow-left"
                style={{ textAlign: 'left' }}
                onPress={() => this.setState({visible: false})}
              />
            </View>
            <ScrollView
              // onTouchEnd={() => this.setState({allowDragging: true})}
              // onTouchCancel={() => this.setState({allowDragging: true})}
              // onTouchStart={() => this.setState({allowDragging: false})}
              >
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
              <Text>Here is the content inside panel</Text>
            </ScrollView>
          </View>
        </SlidingUpPanel>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fce4ec',
    position: 'relative'
  },
  header: {
    fontSize: 36,
    fontWeight: 'bold'
  },
  showIndicator: {
    position: 'absolute',
    width: '100%',
    bottom: 0
  },
  hideIndicator: {
    width: '100%'
  }
});

export default SlideUpDemo;
