import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import HoleCard from '../components/HoleCard';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const HoleScreen = ({ navigation, route }) => {
  // const [course, setCourse] = useState();
  const {_id, course}  = route.params;
  const [holes, setHoles] = useState(null)
  const [currentHole, setCurrentHole] = useState(7)

  useEffect(() => {
    setHoles(course.scorecard)
  }, []);

      return (
        <View style={styles.card}>
          <Image style={styles.stretch} src={course.image_path[0]}/>
          <View style={styles.row}>
            <Text style={styles.name}>{course.name}</Text> 
            <MaterialCommunityIcons name="golf" size={40} color="black" />
          </View>
          <HoleCard scorecard={course.scorecard} i={currentHole} />
        </View>
      );
      }

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: 'center', 
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    margin: 10
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    paddingLeft: '18%',
    paddingRight: 10
  },
  location: {
    fontSize: 14,
    paddingLeft: '28%',
    color: '#4b4b4b'
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
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
  stretch: {
    width: '100%',
    height: 250,
    resizeMode: 'stretch',
    marginBottom: 10
  },
  row: {
    flexDirection: 'row'
  }
});

export default HoleScreen;