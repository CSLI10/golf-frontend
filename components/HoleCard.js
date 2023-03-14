import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const HoleCard = ({ scorecard, i }) => {
  return (
    <View style={styles.card}>
        <Text style={styles.hole}>Hole: {scorecard[i].hole}</Text> 
        <View style={styles.row}>
            <Text style={styles.par}>Par {scorecard[i].par}</Text>
            <Text style={styles.par}>{scorecard[i].yards} yards</Text>
            <Text style={styles.par}>Index {scorecard[i].index}</Text>
        </View>
        <View style={styles.iconsRow}>
            <TouchableOpacity>
                <MaterialCommunityIcons name="numeric-1-circle" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialCommunityIcons name="numeric-2-circle" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialCommunityIcons name="numeric-3-circle-outline" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialCommunityIcons name="numeric-4" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialCommunityIcons name="numeric-5-box-outline" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialCommunityIcons name="numeric-6-box" size={50} color="black" />
            </TouchableOpacity>
        </View>
        <View style={styles.iconsRow}>
            <TouchableOpacity>
                <MaterialCommunityIcons name="numeric-7-box" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialCommunityIcons name="numeric-8-box" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialCommunityIcons name="numeric-9-box" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialCommunityIcons name="numeric-10-box-multiple" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialCommunityIcons name="dots-horizontal" size={50} color="black" />
            </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View style={styles.button}>
            <Button title="Enter Score" color="white"/> 
        </View>
        
        
    </View>
  );
};

const styles = StyleSheet.create({
      button: {
        backgroundColor: '#000000',
        paddingBottom: 5
      },
      buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
      },
      card: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#F0f2ee',
        margin: 10
      },
      hole: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        paddingLeft: '37%',
      },
      par: {
        fontSize: 20,
        paddingLeft: 10,
        paddingRight: 10,
        color: '#4b4b4b'
      },
      stretch: {
        width: '100%',
        height: 250,
        resizeMode: 'stretch',
      },
      row: {
        flexDirection: 'row',
        marginLeft: '17%'
      },
      iconsRow: {
        flexDirection: 'row',
        marginLeft: '10%'
      },
      divider: {
        borderBottomColor: '#6e6e6e',
        borderBottomWidth: 1,
        marginTop: 15,
      }
});

export default HoleCard;