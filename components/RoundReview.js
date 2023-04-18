import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, View } from 'react-native';

const RoundReview = ({ form }) => {
  return (
    <View style={styles.cardContainer}>
          <TouchableOpacity style={styles.card}>
            <Text>Hello hole eso ia 8a0d 09q dqwjd 0qqwd 09 </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Text>Hello idas dois d9wq 0wd q0jwd 0qw9jd q0- </Text>
          </TouchableOpacity>
    </View>
  );
}; 

const HoleBreakdown = (form) => {

}
 
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
  card: {
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
  }
});

export default RoundReview;