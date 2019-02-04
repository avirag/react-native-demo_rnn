import React from 'react';
import { Text, StyleSheet } from 'react-native';


const headerText = props =>  (
  <Text {...props} style={[props.style, styles.headerText]}>{props.children}</Text>
)

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    fontWeight: 'bold'
  }
});

export default headerText;
