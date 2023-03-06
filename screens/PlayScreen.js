import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import MapView from 'react-native-maps';

const PlayScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Start a round</Text>
    <SearchBar/>
    <MapView style={styles.map}/>
  </View>
);

const SearchBar = ({ onSearch }) => {
    const [search, setSearch] = useState(''); 
  
    return (
      <View style={styles.container2}>
        <TextInput
          style={styles.input}
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder='Where are you playing??'
        />
        <Button title='Search' onPress={() => onSearch(search)} />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    backgroundColor: 'white',
    height: 50
  },
  map: {
    width: '100%',
    height: '100%',
  }
});

export default PlayScreen;