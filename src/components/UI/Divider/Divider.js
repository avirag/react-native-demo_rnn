import React from 'react';
import { View, StyleSheet } from 'react-native';

const divider = ({style, ...rest}) => (
  <View
    style={[styles.container, style]}
    {...rest}
  />
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: StyleSheet.hairlineWidth
  }
});

export default divider;