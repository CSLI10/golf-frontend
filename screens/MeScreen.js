import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, HStack } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MeScreen = () => (
  <View style={styles.container}>
    {/* <Text style={styles.text}>Me</Text> */}
    <TouchableOpacity style={styles.button}>
       <Text style={styles.settings}><Icon style={styles.icon} name="create" color="coolGray.200" size={20}/> Edit Profile</Text>  
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
       <Text style={styles.settings}><Icon style={styles.icon} name="trending-up" color="coolGray.200" size={20}/> Stats</Text>  
    </TouchableOpacity>
    <TouchableOpacity style={styles.button}>
       <Text style={styles.settings}><Icon style={styles.icon} name="heart" color="coolGray.200" size={20}/> Favourite Courses</Text>  
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center', 
    backgroundColor: '#FFFFFF',
    marginTop: 2,
    padding: 10,
    width: 400,
    height: 50
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  settings: {
    fontSize: 20
  },
  icon: {
    alignItems: 'right'
  }
});

export default MeScreen;