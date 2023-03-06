import React, { useState ,useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button } from 'react-native';
// import courses from "../assets/list_courses.json";
import CourseSquare from "../components/CourseSquare"
import axios from "axios";

const CoursesScreen = ( { navigation }) => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    axios
      .get("https://golf-backend-app.vercel.app/api/courses")
      .then((response) => {
        // console.log(response.data);
        setCourses(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

        return (
        <View style={styles.container}>
          <Text style={styles.text}>Courses in Ireland</Text>
          <SearchBar />
          <FlatList
            data={courses}
            keyExtractor={(item) => item.name.toString()}
            renderItem={({ item }) => (
              <CourseSquare name={item.name} location={item.location} rating={item.rating} _id={item._id} onPress={() => navigation.navigate('ShowCourseScreen', { _id: item.id })} />
            )}
          />
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
        <Button title='Search' onPress={() => onSearch(search)} />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
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
  }
});

export default CoursesScreen;