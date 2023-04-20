import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import ShowStat from '../components/ShowStat';

const SingleStatScreen = ({ navigation, route }) => {
  const {stat}  = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{stat}</Text>
      <ShowStat stat={stat}/>
    </View>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
});

export default SingleStatScreen;