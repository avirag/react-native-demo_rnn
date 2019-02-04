import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const iconButton = ({size, name, color, style, backgroundColor, onPress, ...rest}) => (
  <View style={{
      borderRadius: size,
      height: size + 15,
      width: size + 15,
      backgroundColor: backgroundColor,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Icon
      size={size}
      name={name}
      color={color}
      onPress={onPress}
      {...rest}
    />
  </View>
);

export default iconButton;