import React from "react";
import { Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, View, } from "react-native";
import Svg, { Circle, Text as SvgText } from 'react-native-svg';

const RoundReview = ({ form, scorecard }) => {
  const radius = 5;

  const NumberScore = ({ score }) => {
    return(
      <Svg width={radius * 2} height={radius * 2}>
      <Circle
        cx={radius}
        cy={radius}
        r={radius - 10} // subtract 10 from radius to create space for stroke width
        // fill="#ccc" // grey color
        strokeWidth={10} // circle stroke width
        stroke="grey"
      />

      <SvgText
        x={radius}
        y={radius}
        fontSize={24}
        fontWeight={'bold'}
        fill="#000" // percentage text color
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        {{score}}
      </SvgText>
    </Svg>
    )
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.row}>
        <View style={styles.header}>
          <Text style={[styles.cell, styles.headerText]}>Hole</Text>
          <Text style={[styles.cell, styles.headerText]}>Par</Text>
          <Text style={[styles.cell, styles.headerText]}>Index</Text>
          <Text style={[styles.cell, styles.headerText]}>Score</Text>
          <Text style={[styles.cell, styles.headerText]}>Putts</Text>
        </View>
        <ScrollView horizontal>
          <View>
            <FlatList 
              horizontal={true}
              scrollEnabled={false}
              data={form}
              keyExtractor={(item) => item.hole.toString()}
              renderItem={({ item }) => (
                <Text style={[styles.cell2, styles.item]}> {item.hole} </Text>
              )}
            />
            <FlatList
              horizontal={true}
              scrollEnabled={false}
              data={scorecard}
              keyExtractor={(item) => item.hole.toString()}
              renderItem={({ item }) => (
                <Text style={[styles.cell2, styles.item]}> {item.par} </Text>
              )}
            />
            <FlatList
              horizontal={true}
              scrollEnabled={false}
              data={scorecard}
              keyExtractor={(item) => item.hole.toString()}
              renderItem={({ item }) => (
                <Text style={[styles.cell2, styles.item]}> {item.index} </Text>
              )}
            />
            <FlatList
              horizontal={true}
              scrollEnabled={false}
              data={form}
              keyExtractor={(item) => item.hole.toString()}
              renderItem={({ item }) => (
                <Text style={[styles.cell2, styles.item]}> {item.score} </Text>
              )}
            />
            <FlatList
              horizontal={true}
              scrollEnabled={false}
              data={form}
              keyExtractor={(item) => item.hole.toString()}
              renderItem={({ item }) => (
                <Text style={[styles.cell2, styles.item]}> {item.putts} </Text>
              )}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const HoleBreakdown = (form) => {};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    height: 200,
  },
  // item: {
  //   borderRadius: 100,
  //   borderWidth: 1,
  //   fontWeight: 'bold'
  // },
  cardContainer: {
    height: 155,
    width: '95%',
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 1
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cell: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
  },
  cell2: {
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0f0f0",
    borderWidth: 1,
    fontWeight: 'bold',
    borderColor: "#ccc",
    padding: 5,
  },
  headerText: {
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginVertical: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  body: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 10,
  },
  row: {
    marginLeft: 0,
    marginRight: 0,
    flexDirection: "row",
  },
});

export default RoundReview;
