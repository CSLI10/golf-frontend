import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Par3Card = ({ scorecard, i }) => {
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
                <MaterialCommunityIcons name="numeric-2-circle-outline" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialCommunityIcons name="numeric-3" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialCommunityIcons name="numeric-4-box-outline" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialCommunityIcons name="numeric-5-box" size={50} color="black" />
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
        <View style={styles.fairwaysRow}>
            <Text style={styles.body}>Fairway Hit</Text>
            <View style={styles.extrasRow}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="arrow-top-left-thick" size={40} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="check-bold" size={35} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="arrow-top-right-thick" size={40} color="black" />
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.greensRow}>
            <Text style={styles.body}>Green in Regulation</Text>
            <TouchableOpacity>
                <MaterialCommunityIcons name="check-bold" size={35} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
            <MaterialCommunityIcons name="close-circle-outline" size={35} color="black" />
            </TouchableOpacity>
        </View>
        <View style={styles.puttsRow}>
            <Text style={styles.body}>Putts</Text>
            <View style={styles.extrasRow2}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="numeric-1-circle-outline" size={35} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="numeric-2-circle-outline" size={35} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="numeric-3-circle-outline" size={35} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="numeric-4-circle-outline" size={35} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="plus-circle-outline" size={35} color="black" />
                </TouchableOpacity>
            </View>
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
      extrasRow: {
        flexDirection: 'row',
        paddingLeft: '13.5%'
      },
      extrasRow2: {
        flexDirection: 'row',
        paddingLeft: '12.5%'
      },
      body: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingRight: 30,
        marginBottom: 10
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
        marginLeft: '17%',
        paddingBottom: 10
      },
      iconsRow: {
        flexDirection: 'row',
        marginLeft: '10%'
      },
      fairwaysRow: {
        flexDirection: 'row',
        marginLeft: '10%',
        paddingTop: 10
      },
      greensRow: {
        flexDirection: 'row',
        marginLeft: '10%'
      },
      puttsRow: {
        flexDirection: 'row',
        marginLeft: '10%'
      },
      divider: {
        borderBottomColor: '#6e6e6e',
        borderBottomWidth: 1,
        marginTop: 15,
      }
});

export default Par3Card;