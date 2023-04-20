import React, { useState, useEffect, useContext, useMemo } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie, VictoryLabel } from "victory-native";
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

const MyTable = ({ data }) => {
  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 50 }}>
      <VictoryBar
        data={data}
        style={{ data: { fill: "#148eb0" }, labels: { fill: "#148eb0" } }}
        labels={({ datum }) => datum.score}
        labelComponent={<VictoryLabel dy={0} />}
        barRatio={0.5}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        alignment="middle"
        x="date"
        y="score"
      />
    </VictoryChart>
  );
};

const ShowStat = ({ stat }) => {
  const { userInfo } = useContext(AuthContext);
  // const {stat}  = route.params;
  const totalFairways =
    userInfo.stats.fairway_missed_right +
    userInfo.stats.fairway_missed_left +
    userInfo.stats.fairways_hit;
  // const {stats, setStats} = useState(null);
  const { isLoading, setIsLoading } = useState(true);
  // let isLoading = true;
  // let scoresChart = [];
  // const {scoresChart, setScoresChart} = useState([]);
  const scoresChart = useMemo(() => {
    let scoresArray = [];
    for (let i = 0; i < userInfo.played_courses.length; i++) {
      scoresArray.push({
        date: userInfo.played_courses[i].round.date_played,
        score: userInfo.played_courses[i].round.total_score,
      });
    }
    return scoresArray;
  }, []);
  const puttsChart = useMemo(() => {
    let puttsArray = [];
    for (let i = 0; i < userInfo.played_courses.length; i++) {
      puttsArray.push({
        date: userInfo.played_courses[i].round.date_played,
        score:
          Math.round((userInfo.played_courses[i].round.putts / 18) * 10) / 10,
      });
    }
    return puttsArray;
  }, []);
  // const {rounds, setRounds} = useState(null)
  const statsPie = [
    { x: "Eagle +", y: userInfo.stats.eagles + userInfo.stats.albatrosses },
    { x: "Bogey", y: userInfo.stats.bogeys },
    { x: "Birdie", y: userInfo.stats.birdies },
    { x: "Double +", y: userInfo.stats.double + userInfo.stats.triple_plus },
    { x: "Par", y: userInfo.stats.pars },
  ];

  // const scoresChart = [
  //   { date: userInfo.played_courses[0].round.date_played, score: userInfo.played_courses[0].round.total_score },
  //   { date: userInfo.played_courses[1].round.date_played, score: userInfo.played_courses[1].round.total_score },
  //   { date: userInfo.played_courses[2].round.date_played, score: userInfo.played_courses[2].round.total_score },
  //   { date: userInfo.played_courses[3].round.date_played, score: userInfo.played_courses[3].round.total_score },
  //   { date: userInfo.played_courses[4].round.date_played, score: userInfo.played_courses[4].round.total_score },
  //   { date: userInfo.played_courses[5].round.date_played, score: userInfo.played_courses[5].round.total_score }
  // ]

  // const puttsChart = [
  //   { date: userInfo.played_courses[0].round.date_played, score: Math.round(userInfo.played_courses[0].round.putts/18 * 10)/10 },
  //   { date: userInfo.played_courses[1].round.date_played, score: Math.round(userInfo.played_courses[1].round.putts/18 * 10)/10 },
  //   { date: userInfo.played_courses[2].round.date_played, score: Math.round(userInfo.played_courses[2].round.putts/18 * 10)/10 }
  // ]

  const fairwaysPie = [
    { x: "Right", y: userInfo.stats.fairway_missed_right },
    { x: "Hit", y: userInfo.stats.fairways_hit },
    { x: "Left", y: userInfo.stats.fairway_missed_left },
  ];

  //   useEffect(() => {
  //       makeCharts()
  //     }, []);

  const makeCharts = () => {
    //   isLoading = true;
    // setIsLoading(true);
    let scoresArray = [];
    let data = { date: null, score: null };
    for (let i = 0; i < userInfo.played_courses.length; i++) {
      data.date = userInfo.played_courses[i].round.date_played;
      data.score = userInfo.played_courses[i].round.total_score;
      scoresArray.push(data);
    }
    //   setScoresChart(scoresArray);
    // scoresChart = scoresArray;
    // isLoading = false;
    return scoresArray;

    //   setIsLoading(false);
  };
  const percentage = Math.round(
    (userInfo.stats.greens_hit / (userInfo.stats.rounds_played * 18)) * 100
  );
  const radius = 100; // circle radius
  const circumference = radius * 2 * Math.PI; // circle circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference; // stroke dash offset

  while (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color={"black"} size={50} />
      </View>
    );
  }

  if (stat === "Scores") {
    return (
      <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 20 }}>
        <VictoryBar
          data={scoresChart}
          style={{ data: { fill: "#148eb0" }, labels: { fill: "#148eb0" } }}
          labels={({ datum }) => datum.score}
          labelComponent={<VictoryLabel dy={0} />}
          barRatio={0.5}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          alignment="middle"
          x="date"
          y="score"
        />
      </VictoryChart>
    );
  }
  //       if(stat === "Scores"){
  //         return (
  //             <MyTable data={scoresChart} />
  //         )
  //   }
  else if (stat === "Score Distribution") {
    return (
      <VictoryPie
        width={350}
        theme={VictoryTheme.material}
        data={statsPie}
        animate={{
          duration: 2000,
        }}
      />
    );
  } else if (stat === "Fairways Hit") {
    return (
      <VictoryPie
        width={400}
        theme={VictoryTheme.material}
        data={fairwaysPie}
        startAngle={90}
        endAngle={-90}
        style={{ labels: { fill: "black" } }}
        labels={({ datum }) =>
          `${Math.round((datum.y / totalFairways) * 100)}%`
        }
        labelComponent={<VictoryLabel dy={0} dx={-10} />}
        animate={{
          duration: 2000,
        }}
      />
    );
  } else if (stat === "Putts per Hole") {
    return (
      <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 50 }}>
        <VictoryBar
          data={puttsChart}
          style={{ data: { fill: "#148eb0" }, labels: { fill: "#148eb0" } }}
          labels={({ datum }) => datum.score}
          labelComponent={<VictoryLabel dy={0} />}
          barRatio={0.5}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          alignment="middle"
          x="date"
          y="score"
        />
      </VictoryChart>
    );
  } else if (stat === "Green in Regulation") {
    return (
      <View style={{ alignItems: "center" }}>
        <Svg width={radius * 2} height={radius * 2}>
          <Circle
            cx={radius}
            cy={radius}
            r={radius - 10} // subtract 10 from radius to create space for stroke width
            // fill="#ccc" // grey color
            strokeWidth={10} // circle stroke width
            stroke="grey"
          />
          <Circle
            cx={radius}
            cy={radius}
            r={radius - 10} // subtract 10 from radius to create space for stroke width
            fill="transparent"
            stroke="#2196f3" // circle stroke color
            strokeWidth={10} // circle stroke width
            strokeDasharray={`${circumference}, ${circumference}`}
            strokeDashoffset={strokeDashoffset}
          />

          <SvgText
            x={radius}
            y={radius}
            fontSize={24}
            fill="#000" // percentage text color
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {`${percentage}%`}
          </SvgText>
        </Svg>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    width: 175,
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  body: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 10,
  },
});

export default ShowStat;