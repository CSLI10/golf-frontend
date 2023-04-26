import React, { useState, useContext } from 'react';
import { View, Text, Modal, TextInput, StyleSheet, Button } from 'react-native';
import RoundReview from './RoundReview';

const SubmitRoundForm = ({ navigation, visible, onClose, submitRound, form, scorecard }) => {

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.title}>Submit Round</Text>
        <RoundReview form={form} scorecard={scorecard}/>
        <View style={styles.buttons}>
          <Button title="Cancel" onPress={onClose} color="red" />
          <Button title="Submit" onPress={() => {submitRound()}} />
        </View>
      </View>
    </Modal>
  );
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default SubmitRoundForm;