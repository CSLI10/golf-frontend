import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PlayCard = ({ onPress, navigation, course }) => { 
  // const {course} = route.params
  return (
    <View style={styles.cardContainer} onPress={onPress}>
      <Image 
        style={styles.stretch} 
        source={{
          uri: `${course.image_path[1]}`,
        }}
        />
      <View style={styles.row}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="star" size={30} color="black" />
        </TouchableOpacity>
        <View>
          <Text style={styles.name}>{course.name}</Text>
          <Text style={styles.body}>{course.location}</Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <MaterialCommunityIcons name="golf-tee" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    padding: 0,
    width: 250,
    height: 130,
    justifyContent: 'center',
    borderRadius: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 0,
  },
  stretch: {
    width: '100%',
    height: 90,
    resizeMode: 'stretch',
    // borderTopLeftRadius: 80,
    // borderTopRightRadius: 80,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  body: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default PlayCard;