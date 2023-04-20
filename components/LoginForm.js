import React, { useState, useContext } from 'react';
import { View, Text, Modal, TextInput, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { AuthContext } from '../context/AuthContext';

const LoginForm = ({ navigation, visible, onClose }) => {

    const {login} = useContext(AuthContext)


  const [emailValue, setEmailValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.title}>Log in here</Text>
        <TextInput
          style={styles.input}
          value={emailValue}
          onChangeText={setEmailValue}
          placeholder="Email"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.input}
          value={passwordValue}
          onChangeText={setPasswordValue}
          placeholder="Password"
          placeholderTextColor="grey"
        />
        <View style={styles.buttons}>
          <Button title="Cancel" onPress={onClose} color="red" />
          <Button title="Submit" onPress={() => {login(emailValue, passwordValue)}} />
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

export default LoginForm;