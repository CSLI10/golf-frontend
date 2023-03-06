import React, { useState ,useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button } from 'react-native';
import axios from "axios";

const ShowCourseScreen = (route) => {
  const [course, setCourse] = useState(null);
  const { _id } = route.params;

  useEffect(() => {
    axios
      .get(`https://golf-backend-app.vercel.app/api/courses/${_id}`)
      .then((response) => {
        // console.log(response.data);
        setCourse(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

        return (
        <View style={styles.container}>
          <Text style={styles.text}>{course.name}</Text>
        </View>
      );
      }

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

export default ShowCourseScreen;