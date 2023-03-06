import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { VStack, Box, Divider } from 'native-base';

const CourseSquare = ({ name, location, rating, _id, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.body}>{location}</Text>
      <Text style={styles.body}>Rating:  {rating}</Text>
      <Text style={styles.body}>id:  {_id}</Text>
    </TouchableOpacity>
//     <Box border="1" borderRadius="md">
//     <VStack space="4" divider={<Divider />}>
//       <Box px="4" pt="4">
//         {name}
//       </Box>
//       <Box px="4">
//         {location}
//       </Box>
//       <Box px="4" pb="4">
//         {rating} 
//       </Box>
//     </VStack>
//   </Box>
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
    marginVertical: 10,
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