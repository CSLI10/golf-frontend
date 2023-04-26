import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator, TouchableOpacity, ImageBackground } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import PlayCard from '../components/PlayCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PlayScreen = ({ navigation }) => {
  const [courses, setCourses] = useState(null);
  const [id, setID] = useState(null);
  const [user, setUser] = useState(null);
  const [favCourse, setFavCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {userInfo} = useContext(AuthContext);

//   const markers = useMemo(() => {
//     axios
//     .get("https://golf-backend-app.vercel.app/api/courses")
//     .then((response) => {
//       // console.log(response.data);
//       let courses = response.data
//       setCourses(courses);
//       let markersArray = [];
//       for(let i = 0; i < courses.length; i++){
//         markersArray.push({ id: courses[i]._id, title: courses[i].name, description: courses[i].location, coordinate: { latitude: courses[i].latlong[0], longitude: courses[i].latlong[1] } });
//       }
//       return markersArray;
//     })  
//     .catch((err) => {
//       console.error(err);
//     });

// }, []);


  const markers = [
    { id: 1, title: 'Old Conna Golf Club', description: 'Old Connaught, Bray', coordinate: { latitude: 53.215641, longitude: -6.137376 } },
    { id: 2, title: 'Adare Manor Hotel and Golf Resort', description: 'Adare, Ireland', coordinate: { latitude: 52.557381, longitude: -8.797430 } },
    { id: 3, title: 'Leopardstown Golf Centre', description: 'Foxrock, Dublin', coordinate: { latitude: 53.266263, longitude: -6.187713 } },
    { id: 4, title: 'Ballybunion Golf Club', description: 'Ballybunion, Ireland', coordinate: { latitude: 52.495137, longitude: -9.676400 } },
  ];

  // const image = {uri: "https://golfersglobe.com/media/3220/ballybunion-7th-am.jpg"}
  // const image = {uri: "https://www.hartough.com/uploads/Thumbnails/10th.Augusta.jpg"}
  const image = {uri: "https://www.hartough.com/uploads/Thumbnails/11th-hole-white-dogwood-augusta-national-golf-club-1996.jpg"}
  

  // const id = AsyncStorage.getItem('_id');  

  const getFavourites = () => {
    setIsLoading(true);
    // let courses = [];
    // console.log(courses)
    // let favourites = [];
    // for(let i = 0; i < userInfo.favourite_courses.length; i++){
    //     axios
    //     .get(`https://golf-backend-app.vercel.app/api/courses/${userInfo.favourite_courses[i]}`)
    //     .then((response) => {
    //       console.log(response.data);
    //       // await setFavCourses(favCourses.push(response.data));  
    //       favourites.push(response.data) 
    //       // setFavCourse(response.data); 
    //       // setIsLoading(false);
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
    //     setFavCourse(favourites);
    //     setIsLoading(false);
    // }
    // console.log(courses.length) 
        axios
        .get(`https://golf-backend-app.vercel.app/api/courses/${userInfo.favourite_courses[0]}`)
        .then((response) => {
          // console.log(response.data);
          // await setFavCourses(favCourses.push(response.data));  
          setFavCourse(response.data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
  }

  const getCourses = () => {
    axios
    .get("https://golf-backend-app.vercel.app/api/courses")
    .then((response) => {
      // console.log(response.data);
      setCourses(response.data);
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={'black'} size={50} />
      </View>
    )
  }
  else{
    return(
      <View style={styles.container}>
        {/* <View style={styles.card}>
          <Text style={styles.text}>Start a round</Text>
          <SearchBar/>
        </View> */}
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <MaterialCommunityIcons name="golf" size={84} color="white" />
              <Text style={styles.start}>Start a Round</Text>

      <SearchBar/>
      {/* <PlayCard course={favCourse} onPress={() => navigation.navigate('HoleScreen', { course: favCourse })}/>  */}
    </ImageBackground>


      {/* <FlatList
          data={favCourse}
          keyExtractor={(item) => item.name.toString()}
          renderItem={({ item }) => (
            <PlayCard course={item} onPress={() => navigation.navigate('HoleScreen', { course: item })}/>
          )}
        /> */}
      {/* <PlayCard course={favCourse} onPress={() => navigation.navigate('HoleScreen', { course: favCourse })}/>  */}
      {/* <PlayCard course={favCourse[1]} onPress={() => navigation.navigate('HoleScreen', { course: favCourse[1] })}/>  */}
      {/* <MapView 
      style={styles.map}
      >
      {markers.map(marker => (
        <Marker
          key={marker.id}
          title={marker.title}
          description={marker.description}
          coordinate={marker.coordinate}
        />
      ))}
      </MapView> */}
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
          placeholder='Where are you playing today?'
        />
        <Button color='white' title='Search' onPress={() => onSearch(search)} />
        {/* <TouchableOpacity>
          <Text style={styles.search}>Search <MaterialCommunityIcons name="send" size={14} color="white" /></Text>
        </TouchableOpacity> */}
      </View> 
    );
  };

const styles = StyleSheet.create({
  container: { 
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  },
  card: {
    // backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 10,
    height: 70,
    borderRadius: 0,
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
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 0,
    marginVertical: 1,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'white'
  },
  start: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'white'
  },
  searchB: {
    color: 'white'
  },
  search: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 0,
    color: 'white',
    marginLeft: 10
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
    borderRadius: 40,
    backgroundColor: 'white',
    height: 40
  },
  map: {
    width: '100%',
    height: '100%',
  }
});

export default PlayScreen;