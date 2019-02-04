import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import UserListItem from '../UserListItem/UserListItem';
import Divider from '../UI/Divider/Divider';

const userList = props => {
  return (
    <FlatList
      style={styles.userContainer}
      keyExtractor={user => `${user.id}`}
      data={props.users}
      renderItem={(info) => (
        <View>
          <UserListItem user={info.item} />
          <Divider />
        </View>
      )}
    />
  )
};

const styles = StyleSheet.create({
  userContainer: {
    width: '90%',
    marginTop: 15
  }
});

export default userList;