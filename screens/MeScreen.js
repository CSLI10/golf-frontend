import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, HStack } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MeScreen = ({ navigation, setAuthenticated }) => {

  const logOut = async () => {
    // 
    await AsyncStorage.removeItem('token')
    await AsyncStorage.removeItem('_id')
    // await console.log("token here    " + token)
    // setAuthenticated(false)
    navigation.navigate('WelcomeScreen')
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Me</Text> */}
      <TouchableOpacity style={styles.button}> 
         <Text style={styles.settings}><Icon style={styles.icon} name="create" size={20}/> Edit Profile</Text>  
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
         <Text style={styles.settings}><Icon style={styles.icon} name="trending-up" size={20}/> Stats</Text>  
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
         <Text style={styles.settings}><Icon style={styles.icon} name="heart" size={20}/> Favourite Courses</Text>  
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={logOut}>
         <Text style={styles.settings}><Icon style={styles.icon} name="log-out-outline" size={20}/> Sign Out</Text>  
      </TouchableOpacity>
    </View>
  );
}

 
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
    
  }
});

export default MeScreen;