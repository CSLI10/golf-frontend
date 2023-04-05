import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PlayCard = ({ onPress, navigation, course }) => {
  // const {course} = route.params
  return (
    <View style={styles.cardContainer} onPress={onPress}>
        <View style={styles.row}>
            <TouchableOpacity>
                <MaterialCommunityIcons name="star" size={40} color="black" />
            </TouchableOpacity>
            <View>
              <Text style={styles.name}>{course.name}</Text>
              <Text style={styles.body}>{course.location}</Text>
            </View>
            <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons name="golf-tee" size={40} color="black" />
            </TouchableOpacity>
        </View>

    </View>  
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 1,
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
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default PlayCard;