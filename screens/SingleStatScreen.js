import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie, VictoryLabel } from "victory-native";

const SingleStatScreen = ({ navigation, route }) => {
  const {userInfo} = useContext(AuthContext);
  const {stat}  = route.params;
  const totalFairways = userInfo.stats.fairway_missed_right + userInfo.stats.fairway_missed_left + userInfo.stats.fairways_hit;
  // const {stats, setStats} = useState(null);
//   const {scoresChart, setScoresChart} = useState(null)
  // const {rounds, setRounds} = useState(null)
  const statsPie = [
    { x: "Eagle +", y: userInfo.stats.eagles+userInfo.stats.albatrosses },
    { x: "Bogey", y: userInfo.stats.bogeys },
    { x: "Birdie", y: userInfo.stats.birdies },
    { x: "Double +", y: userInfo.stats.double+userInfo.stats.triple_plus },
    { x: "Par", y: userInfo.stats.pars },
  ];

  const scoresChart = [
    { date: userInfo.played_courses[0].round.date_played, score: userInfo.played_courses[0].round.total_score },
    { date: userInfo.played_courses[1].round.date_played, score: userInfo.played_courses[1].round.total_score },
    { date: userInfo.played_courses[2].round.date_played, score: userInfo.played_courses[2].round.total_score }
  ]

  const puttsChart = [
    { date: userInfo.played_courses[0].round.date_played, score: Math.round(userInfo.played_courses[0].round.putts/18 * 10)/10 },
    { date: userInfo.played_courses[1].round.date_played, score: Math.round(userInfo.played_courses[1].round.putts/18 * 10)/10 },
    { date: userInfo.played_courses[2].round.date_played, score: Math.round(userInfo.played_courses[2].round.putts/18 * 10)/10 }
  ]

  const fairwaysPie = [
    { x: "Right", y: userInfo.stats.fairway_missed_right },
    { x: "Hit", y: userInfo.stats.fairways_hit },
    { x: "Left", y: userInfo.stats.fairway_missed_left },
  ]

// useEffect(() => {
//     makeScoresChart()
//   }, []);

//   const makeScoresChart = () => {
//     let scoresArray = []
//     for(let i = 0; i < userInfo.played_courses.length; i++){
//         scoresArray.push({ date: userInfo.played_courses[i].round.date_played, score: userInfo.played_courses[i].round.total_score })
//     }
//     setScoresChart(scoresArray);
//   }




  const getStats = () => {
    // let userStats = null;
    // let userRounds = null;
    // getUser(userInfo._id);
    // setStats(userInfo.stats);
    // setRounds(userInfo.played_courses)
  }

  const ShowStat = () => {
    if(stat === "Scores"){
        return (
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={{ x: 50 }}
            >
                <VictoryBar
                data={scoresChart}
                style={{ data: { fill: "#148eb0" }, labels: { fill: "#148eb0" } }}
                labels={({ datum }) => datum.score}
                labelComponent={<VictoryLabel dy={0}/>}
                barRatio={0.5}
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                }}
                alignment="middle"
                x="date"
                y="score"
                />
            </VictoryChart>
        )
    }
    else if(stat === "Score Distribution"){
        return (
            <VictoryPie
            width={350}
            theme={VictoryTheme.material}
            data={statsPie}
            animate={{
                duration: 2000
            }}
            />
        )
    }
    else if(stat === "Fairways Hit"){
        return (
            <VictoryPie
            width={400}
            theme={VictoryTheme.material}
            data={fairwaysPie}
            startAngle={90}
            endAngle={-90}
            style={{ labels: { fill: "black" } }}
            labels={({ datum }) => `${Math.round(datum.y/totalFairways*100)}%`}
            labelComponent={<VictoryLabel dy={0} dx={-10}/>}
            animate={{
                duration: 2000
            }}
            />
        )
    }
    else if(stat === "Putts per Hole"){
        return (
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={{ x: 50 }}
            >
                <VictoryBar
                data={puttsChart}
                style={{ data: { fill: "#148eb0" }, labels: { fill: "#148eb0" } }}
                labels={({ datum }) => datum.score}
                labelComponent={<VictoryLabel dy={0}/>}
                barRatio={0.5}
                animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                }}
                alignment="middle"
                x="date"
                y="score"
                />
            </VictoryChart>
        )
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{stat}</Text>
      <ShowStat />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
});

export default SingleStatScreen;