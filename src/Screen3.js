import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'
import {Navigation} from 'react-native-navigation';

export default class Screen3 extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Screen 3'
        },
      }
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen 3</Text>
        <Button
          onPress={() => Navigation.pop(this.props.componentId)}
          title="Go Back"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})