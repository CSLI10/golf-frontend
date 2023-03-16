import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Par4Card from '../components/Par4Card';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Par3Card from '../components/Par3Card';
import Par5Card from '../components/Par5Card';
import { TouchableOpacity } from 'react-native';

const HoleScreen = ({ navigation, route }) => {
  // const [course, setCourse] = useState();
  const {_id, course}  = route.params;
  const [holes, setHoles] = useState(null)
  const [currentHole, setCurrentHole] = useState(0)

  useEffect(() => {
    setHoles(course.scorecard)
  }, []);

  const prevHole = () => {
    if(currentHole >= 1){
        setCurrentHole(currentHole - 1);
    }
  }

  const nextHole = () => {
    if(currentHole <= 16){
        setCurrentHole(currentHole + 1);
    }
  }

  const PrevButton = () => {
    if(currentHole > 0){
        return (
          <TouchableOpacity style={styles.row} onPress={prevHole}>
             <MaterialCommunityIcons name="arrow-left-circle-outline" size={35} color="black" />
             <Text style={styles.description}>Previous</Text>
          </TouchableOpacity>
        )
    }
    else {
        return (
            <View style={styles.row}>
               <MaterialCommunityIcons name="arrow-left-circle-outline" size={35} color="grey" />
               <Text style={styles.inactive}>Previous</Text>
            </View>
          )
    }
  }

  const NextButton = () => {
    if(currentHole < 17){
        return (
          <TouchableOpacity style={styles.row} onPress={nextHole}>
             <Text style={styles.description}>Next</Text>
             <MaterialCommunityIcons name="arrow-right-circle-outline" size={35} color="black" />
          </TouchableOpacity>
        )
    }
    else {
        return (
            <View style={styles.row}>
               <Text style={styles.inactive}>Next</Text>
               <MaterialCommunityIcons name="arrow-right-circle-outline" size={35} color="grey" />
            </View>
          )
    }
  }



      return (
        <View style={styles.card}>
          <Image style={styles.stretch} src={course.image_path[0]}/>
          <View style={styles.row}>
            <Text style={styles.name}>{course.name}</Text> 
            <MaterialCommunityIcons name="golf" size={40} color="black" /> 
          </View>
          <View style={styles.rowNext}>
            <PrevButton />
            <NextButton />
          </View>

          {/* <HoleCard scorecard={course.scorecard} i={currentHole} /> */}
          <CardHole scorecard={course.scorecard} i={currentHole} />
        </View>
      );
}


const CardHole = ({ scorecard, i }) => {
    if(scorecard[i].par === 4){
        return  <Par4Card scorecard={scorecard} i={i} />
    }
    else if(scorecard[i].par === 3){
        return <Par3Card scorecard={scorecard} i={i} />
    }
    else if(scorecard[i].par === 5){
        return <Par5Card scorecard={scorecard} i={i} />
    }
}



const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    alignItems: 'center', 
  },
  inactive: {
    flexDirection: 'row',
    color: 'grey',
    fontSize: 20, 
    paddingTop: 5,
    paddingHorizontal: 4
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
    fontSize: 20, 
    paddingTop: 5,
    paddingHorizontal: 4
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
  },
  rowNext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  }
});

export default HoleScreen;