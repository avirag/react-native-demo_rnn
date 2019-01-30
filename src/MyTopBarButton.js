import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native'
import {Navigation} from 'react-native-navigation';

export default class MyTopBarButton extends React.Component {
  render() {
    return (
      <View>
        <Text>MyTopBarButton</Text>
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
}
