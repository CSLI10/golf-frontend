import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie } from "victory-native";
import StatCard from '../components/StatCard';

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
    { date: userInfo.played_courses[0].round.date_played, score: userInfo.played_courses[0].round.total_score },
    { date: userInfo.played_courses[1].round.date_played, score: userInfo.played_courses[1].round.total_score }
  ]

  const statsOptions = [
    { stat: "Scores", icon: "chart-bar" },
    { stat: "Score Distribution", icon: "chart-pie" },
    { stat: "Fairways Hit", icon: "arrow-decision-outline" },
    { stat: "Green in Regulation", icon: "chart-donut" },
    { stat: "Putts per Hole", icon: "sort-numeric-ascending" },

  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats</Text>
      <FlatList
            data={statsOptions}
            numColumns={2}
            keyExtractor={(item) => item.stat}
            renderItem={({ item }) => (
              <StatCard stat={item.stat} icon={item.icon} onPress={() => navigation.navigate('SingleStatScreen', { stat: item.stat })}/>
            )}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
});

export default StatsScreen;