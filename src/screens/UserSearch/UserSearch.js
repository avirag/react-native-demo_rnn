import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import imageBackground from '../../assets/white_flower.jpg';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import UserList from '../../components/UserList/UserList';

class UserSearch extends Component {
  state = {
    searchText: null,
    users:
      [
          {
            "id": 1,
              "name": "Proxima Midnight",
              "email": "proxima@appdividend.com",
              "phone": "202-555-0115",
              "job": "Meteorologist"
          },
          {
            "id": 2,
              "name": "Ebony Maw",
              "email": "ebony@appdividend.com",
              "phone": "+1-202-555-0115",
              "job": "Teacher"
          },
          {
            "id": 3,
              "name": "Black Dwarf",
              "email": "dwarf@appdividend.com",
              "phone": "+36 20 244 921",
              "job": "Librarian"
          },
          {
            "id": 4,
              "name": "Mad Titan",
              "email": "thanos@appdividend.com",
              "phone": "202-555-0180",
              "job": "IT consultant"
          },
          {
            "id": 5,
              "name": "Supergiant",
              "email": "supergiant@appdividend.com",
              "phone": "202-555-0135",
              "job": "Pilot"
          },
          {
            "id": 6,
              "name": "Loki",
              "email": "loki@appdividend.com",
              "phone": "",
              "job": "Teacher"
          },
          {
            "id": 7,
              "name": "corvus",
              "email": "corvus@appdividend.com",
              "phone": "+1-202-555-0180",
              "job": "Electrician"
          },
          {
            "id": 8,
              "name": "Proxima Midnight",
              "email": "proxima1@appdividend.com",
              "phone": "+1-202-555-0138",
              "job": "Dentist"
          },
          {
            "id": 9,
              "name": "Ebony Maw",
              "email": "ebony1@appdividend.com",
              "phone": "06 55 744 236",
              "job": "Pilot"
          },
          {
            "id": 10,
              "name": "Black Dwarf",
              "email": "dwarf1@appdividend.com",
              "phone": "+36 01 257 314",
              "job": "Nurse"
          },
          {
            "id": 11,
              "name": "Mad Titan",
              "email": "thanos1@appdividend.com",
              "phone": "06 79 406 729",
              "job": "Accountant"
          },
          {
            "id": 12,
              "name": "Supergiant",
              "email": "supergiant1@appdividend.com",
              "phone": "+36 32 642 215",
              "job": "Barber"
          },
          {
            "id": 13,
              "name": "Loki",
              "email": "loki1@appdividend.com",
              "phone": "+36 10 458 503",
              "job": "Barber"
          },
          {
            "id": 14,
              "name": "corvus",
              "email": "corvus1@appdividend.com",
              "phone": "+36 55 346 518",
              "job": "Au pair"
          }
      ]
  }

  handleSearchTextChanged(searchText) {
    this.setState(prevState => ({
      ...prevState,
      searchText: searchText.toLowerCase()
    }));
  }

  render() {
    const { searchText, users } = this.state;
    let filteredUsers;

    if (!searchText) {
      filteredUsers = users;
    }

    if (searchText) {
      filteredUsers =  users.filter(user => {
        return user.name.toLowerCase().search(searchText) !== -1
          || user.email.toLowerCase().search(searchText) !== -1
          || user.phone.toLowerCase().search(searchText) !== -1
          || user.job.toLowerCase().search(searchText) !== -1;
      });
    }

    return (
      <ImageBackground
        style={styles.imageBackground}
        source={imageBackground}
      >
        <View style={styles.container}>
          <Text style={styles.maintext}>Contacts</Text>
          <SearchBar onChangeSearchText={val => this.handleSearchTextChanged(val)} />
          <UserList users={filteredUsers} />
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  maintext: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 15,
  }
});

export default UserSearch
