import React, { Component } from 'react';
import { View, TextInput, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class SearchBar extends Component {
  render() {
    const { onChangeSearchText } = this.props;

    return (
      <View style={styles.searchInput}>
        <MaterialIcons
          name='search'
          size={22}
          style={styles.searchIcon}
          color='white'
        />
        <TextInput
          underlineColorAndroid="transparent"
          style={styles.inputText}
          placeholder={'I\'m looking for...'}
          placeholderTextColor='white'
          onChangeText={onChangeSearchText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchInput: {
    display: 'flex',
    width: '90%',
    height: 45,
    marginTop: 2,
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'white'
  },
  searchIcon: {
    position: 'absolute',
    left: 13,
    top: 12,
  },
  inputText: {
    display: 'flex',
    marginTop: 8,
    marginLeft: 43,
    fontSize: 14,
    color: '#999',
  }
});

export default SearchBar;
