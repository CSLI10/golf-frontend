import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie } from "victory-native";

const StatsScreen = ({ navigation }) => {
  const {userInfo} = useContext(AuthContext);
  // const {stats, setStats} = useState(null);
  // const {rounds, setRounds} = useState(null)
  const statsPie = [
    { x: "Eagle +", y: userInfo.stats.eagles+userInfo.stats.albatrosses },
    { x: "Bogey", y: userInfo.stats.bogeys },
    { x: "Birdie", y: userInfo.stats.birdies },
    { x: "Double +", y: userInfo.stats.double+userInfo.stats.triple_plus },
    { x: "Par", y: userInfo.stats.pars },
  ];

  const scoresChart = [
    { date: userInfo.played_courses[0].round.date_played, score: userInfo.played_courses[0].round.total_score},
    { date: userInfo.played_courses[1].round.date_played, score: userInfo.played_courses[1].round.total_score}
  ]


  const getStats = () => {
    // let userStats = null;
    // let userRounds = null;
    // getUser(userInfo._id);
    // setStats(userInfo.stats);
    // setRounds(userInfo.played_courses)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats</Text>
      <VictoryPie
      width={450}
      theme={VictoryTheme.material}
      data={statsPie}
      />
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 50 }}
      >
        <VictoryBar
          data={scoresChart}
          x="date"
          y="score"
        />
      </VictoryChart>
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

export default StatsScreen;