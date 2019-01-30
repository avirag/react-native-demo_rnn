import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'
import {Navigation} from 'react-native-navigation';

export default class Screen2 extends React.Component {
  static get options() {
    return {
      topBar: {
        title: {
          text: 'Screen 2'
        },
        rightButtons: [
          {
            id: 'myDynamicButton',
            text: 'My Button',
            component: {
              name: 'MenuBar'
            },
          }
        ]
      }
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen 2</Text>
        <Button
          onPress={() => Navigation.push(this.props.componentId, {
            component: {
              name: 'Screen3'
            }
          })}
          title="View next screen"
        />
        <Button
          onPress={() => Navigation.pop(this.props.componentId)}
          title="Go back"
        />
      </View>
    )
  }

  navigationButtonPressed({ buttonId }) {
    alert('button ID:', buttonId);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})