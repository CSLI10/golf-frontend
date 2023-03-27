import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import MapView from 'react-native-maps';
import axios from 'axios';
import PlayCard from '../components/PlayCard';
import AsyncStorage from '@react-native-async-storage/async-storage';



const PlayScreen = ({ navigation }) => {
  const [courses, setCourses] = useState(null);
  const [id, setID] = useState(null);
  const [user, setUser] = useState(null);

  // const id = AsyncStorage.getItem('_id');

  _retrieveData = async () => {
    try {
      const temp = await AsyncStorage.getItem('_id');
      setID(temp);
      if (id !== null) {
        // We have data!!
        console.log("FIrst" + id);
        axios
        .get(`https://golf-backend-app.vercel.app/api/users/${id}`)
        .then((response) => {
          console.log(response.data.favourite_courses);
          setUser(response.data);
        })  
        .catch((err) => {
          console.error(err);
        });
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  // getUser = () => {
  //   axios
  //   .get(`https://golf-backend-app.vercel.app/api/users${id}`)
  //   .then((response) => {
  //     console.log(response.data);
  //     setUser(response.data);
  //   })  
  //   .catch((err) => {
  //     console.error(err);
  //   });
  // }

  useEffect(() => {
    _retrieveData();

    axios
      .get("https://golf-backend-app.vercel.app/api/courses") 
      .then((response) => {
        // console.log(response.data);
        setCourses(response.data);
        // console.log(courses[0]) 
        console.log("second" + id)
      })  
      .catch((err) => {
        console.error(err);
      });
  }, []);
 
  if(courses != null){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Start a round</Text>
        <SearchBar/>
        <PlayCard course={courses[0]} onPress={() => navigation.navigate('HoleScreen', { course: courses[0] })}/>
        <MapView style={styles.map}/>
      </View>
    )
  }
  else{
    return(
      <Text>Loading</Text>
    )
  }


};



const SearchBar = ({ onSearch }) => { 
    const [search, setSearch] = useState(''); 
  
    return (
      <View style={styles.container2}>
        <TextInput 
          style={styles.input}
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder='Where are you playing??'
        />
        <Button title='Search' onPress={() => onSearch(search)} />
      </View> 
    );
  };

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    backgroundColor: 'white',
    height: 50
  },
  map: {
    width: '100%',
    height: '100%',
  }
});

export default PlayScreen;