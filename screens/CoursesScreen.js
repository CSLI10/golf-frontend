import React, { useState ,useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button, ImageBackground } from 'react-native';
// import courses from "../assets/list_courses.json"; 
import CourseSquare from "../components/CourseSquare"
import axios from "axios";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CoursesScreen = ( { navigation }) => {
  const [courses, setCourses] = useState(null);
  const image = {uri: "https://www.hartough.com/uploads/Thumbnails/11th-hole-white-dogwood-augusta-national-golf-club-1996.jpg"}

  useEffect(() => {
    axios
      .get("https://golf-backend-app.vercel.app/api/courses")
      .then(async (response) => {
        // console.log(response.data);
        await setCourses(response.data);
      })  
      .catch((err) => {
        console.error(err);
      });
  }, []);

        return (
        <View style={styles.container}> 
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.top}>
          <MaterialCommunityIcons name="golf" size={84} color="white" />
             <Text style={styles.text}>Golf Courses</Text>
          <SearchBar />
          </View>

          <FlatList
            data={courses}
            numColumns={2}
            keyExtractor={(item) => item.name.toString()}
            renderItem={({ item }) => (
              <CourseSquare name={item.name} location={item.location} rating={item.rating} image_path={item.image_path[0]} onPress={() => navigation.navigate('ShowCourseScreen', { id: item._id })} />
            )}
          />
        </ImageBackground>
          {/* <Text style={styles.text}>Courses in Ireland</Text>
          <SearchBar />
          <FlatList
            data={courses}
            numColumns={2}
            keyExtractor={(item) => item.name.toString()}
            renderItem={({ item }) => (
              <CourseSquare name={item.name} location={item.location} rating={item.rating} image_path={item.image_path[0]} onPress={() => navigation.navigate('ShowCourseScreen', { id: item._id })} />
            )}
          /> */}
        </View>
      );
} 
 


const SearchBar = ({ onSearch }) => {
    const [search, setSearch] = useState('');
  
    return (
      <View style={styles.container2}>
        <TextInput
          style={styles.input}
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder='Search Courses...'
        />
        <Button title='Search' onPress={() => onSearch(search)} color='white'/>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  top: {
    paddingTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white'
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 0,
    marginVertical: 1,
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
});

export default CoursesScreen;