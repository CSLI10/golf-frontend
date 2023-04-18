import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { VStack, Box, Divider } from 'native-base';

const CourseSquare = ({ name, location, rating, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.body}>{location}</Text>
      <Text style={styles.body}>Rating:  {rating}</Text>
    </TouchableOpacity>
  );
}; 
 
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 5,
  },
  name: {
    fontSize: 20,
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