import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Par4Card from '../components/Par4Card';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Par3Card from '../components/Par3Card';
import Par5Card from '../components/Par5Card';
import { TouchableOpacity } from 'react-native';
import { AuthContext } from '../context/AuthContext';
const holesForm = require('../assets/holeScore.json').holes
import axios from 'axios';


const HoleScreen = ({ navigation, route }) => {
  // const [course, setCourse] = useState();
  const {userInfo, getUser} = useContext(AuthContext);
  // const {user, setUser} = useState(null);
//   const {rounds, setRounds} = useState([]);
  const {_id, course}  = route.params;
  const [holes, setHoles] = useState(null);
  const [currentHole, setCurrentHole] = useState(0);
  const [form, setForm] = useState(holesForm);
  const [round, setRound] = useState({
    scorecard: form,
    total_score: 0,
    score_to_par: 0,
    fairways_hit: 0,
    greens_hit: 0,
    putts: 0,
    date_played: null
  }); 

  useEffect(() => {
    setHoles(course.scorecard);
    getUser(userInfo._id);
  }, []);



  const submitRound = () => {
    let rounds = userInfo.played_courses;
    let total = 0;
    let scoreToPar = 0;
    let fairways = 0;
    let greens = 0;
    let putts = 0;
    let date = new Date();
    for(let i = 0; i < form.length; i ++){
        total += form[i].score;
        if(form[i].fairway === "yes"){
            fairways += 1;
        }
        if(form[i].green === "yes"){
            greens += 1;
        }
        putts += form[i].putts;
       
    }
    scoreToPar = total - course.par;
    let round = {
        scorecard: form,
        total_score: total,
        score_to_par: scoreToPar,
        fairways_hit: fairways,
        greens_hit: greens,
        putts: putts,
        date_played: date.toLocaleDateString()
    }
    let roundsPush = {
        course: course._id,
        round: round
    }
    console.log(roundsPush)
    console.log(rounds)
    rounds.push(roundsPush); 
    axios
    .put(`https://golf-backend-app.vercel.app/api/users/${userInfo._id}`, {
        played_courses: rounds
    }
    )
    .then((response) => {
      console.log("round submitted");
      console.log(response.data)

    })
    .catch((err) => {
      console.error(err);
    });
    
  }

  const handleForm = (prop, i, value) => { 
    let newForm = [...form];
    newForm[i][prop] = value;
    setForm(newForm);
    console.log(form);
  }

  const prevHole = () => {
    if(currentHole >= 1){
        setCurrentHole(currentHole - 1);
    } 
  }

  const nextHole = () => {
    if(currentHole <= 16){
        setCurrentHole(currentHole + 1);
    }
    else{
        submitRound();
        console.log("submit round")
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
          <View style={styles.rowName}>
            <Text style={styles.name}>{course.name}</Text> 
            <MaterialCommunityIcons name="golf" size={40} color="black" /> 
          </View>
          <View style={styles.rowNext}>
            <PrevButton />
            <NextButton />
          </View>
          <CardHole scorecard={course.scorecard} i={currentHole} handleForm={handleForm} nextHole={nextHole}/>
        </View>
      );
}

const CardHole = ({ scorecard, i, handleForm, nextHole }) => {
    if(scorecard[i].par === 4){
        return  <Par4Card scorecard={scorecard} i={i} handleForm={handleForm} nextHole={nextHole}/>
    }
    else if(scorecard[i].par === 3){
        return <Par3Card scorecard={scorecard} i={i} handleForm={handleForm} nextHole={nextHole}/>
    }
    else if(scorecard[i].par === 5){
        return <Par5Card scorecard={scorecard} i={i} handleForm={handleForm} nextHole={nextHole}/>
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
  rowName: {
    flexDirection: 'row',
    paddingRight: '10%'
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