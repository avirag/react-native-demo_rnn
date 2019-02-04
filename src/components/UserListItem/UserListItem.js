import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import IconButton from '../UI/IconButton/IconButton';

const userListItem = ({ user, onItemPressed }) => (
  <TouchableOpacity>
    <View style={styles.userListItem}>
      <View>
        <Text style={styles.job}>{user.job}</Text>
        <Text>{user.name}</Text>
        <Text>{user.phone}</Text>
        <Text>{user.email}</Text>
      </View>
      <View style={styles.iconContainer}>
        <IconButton size={40} name="phone-in-talk" color="white" backgroundColor="red" onPress={() => alert('calling...')}/>
        <IconButton size={28} name="pencil" color="white" backgroundColor="green" onPress={() => alert('email...')}/>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  userListItem: {
    width: '100%',
    padding: 10,
    margin: 5,
    backgroundColor: "transparent",
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  job: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  }
});

export default userListItem;