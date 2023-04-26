import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { VStack, Box, Divider } from 'native-base';

const CourseSquare = ({ name, location, rating, image_path, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Image 
        style={styles.stretch} 
        source={{
          uri: `${image_path}`,
        }}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.body}>{location}</Text>

    </TouchableOpacity>
  );
}; 
 
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
    width: 200,
    height: 190,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 5,
    marginHorizontal: 3

  },
  stretch: {
    width: '100%',
    height: 100,
    resizeMode: 'stretch',
    marginBottom: 5,
    borderRadius: 3
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  body: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
  }
});

export default CourseSquare;