import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import MapView from 'react-native-maps';
import axios from 'axios';
import PlayCard from '../components/PlayCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const PlayScreen = ({ navigation }) => {
  const [courses, setCourses] = useState(null);
  const [id, setID] = useState(null);
  const [user, setUser] = useState(null);
  const [favCourse, setFavCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {userInfo} = useContext(AuthContext);

  // const id = AsyncStorage.getItem('_id');  

  const getFavourites = () => {
    // let courses = [];
    // console.log(courses)
    // console.log(courses.length) 
        axios
        .get(`https://golf-backend-app.vercel.app/api/courses/${userInfo.favourite_courses[0]}`)
        .then((response) => {
          console.log(response.data);
          // await setFavCourses(favCourses.push(response.data));  
          setFavCourse(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
  }

  useEffect(() => {
    getFavourites();

    // axios
    //   .get("https://golf-backend-app.vercel.app/api/courses")
    //   .then((response) => {
    //     // console.log(response.data);
    //     setCourses(response.data);
    //     // console.log(courses[0]) 
    //     console.log("second" + id)
    //     setIsLoading(false)
    //   })  
    //   .catch((err) => {
    //     console.error(err); 
    //   });
  }, []);

 
  if(isLoading){
    return(
      <Text>Loading {userInfo.name}</Text>
    )
  }
  else{
    return(
      <View style={styles.container}>
      <Text style={styles.text}>Start a round</Text>
      <SearchBar/>
      {/* <FlatList
          data={favCourses}
          keyExtractor={(item) => item.name.toString()}
          renderItem={({ item }) => (
            <PlayCard course={item} onPress={() => navigation.navigate('HoleScreen', { course: item })}/>
          )}
        /> */}
      <PlayCard course={favCourse} onPress={() => navigation.navigate('HoleScreen', { course: favCourse })}/> 
      {/* <PlayCard course={courses[1]} onPress={() => navigation.navigate('HoleScreen', { course: courses[1] })}/>  */}
      <MapView style={styles.map}/>
    </View>
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