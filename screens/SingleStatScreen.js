import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import ShowStat from '../components/ShowStat';

const SingleStatScreen = ({ navigation, route }) => {
  const {stat}  = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* <Text style={styles.title}>{stat}</Text> */}
        <ShowStat stat={stat}/>
      </View>
    </View>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20
  },
  card: {
    height: '95%',
    width: '95%',
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    margin: 10
  },
});

export default SingleStatScreen; 