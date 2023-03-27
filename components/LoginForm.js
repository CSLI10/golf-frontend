import React, { useState } from 'react';
import { View, Text, Modal, TextInput, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginForm = ({ navigation, visible, onClose }) => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
//   const [token, setToken] = useState(null)
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

  const handleSubmit = () => {
    console.log("Email: ", emailValue);
    console.log("Password: ", passwordValue);

    axios
      .post("https://golf-backend-app.vercel.app/api/users/login", { 
        email: emailValue,
        password: passwordValue,
      })
      .then(async (response) => {
        console.log(response.data);
        const token = response.data.token
        const _id = response.data._id
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('_id', _id);
        console.log('Token stored:', token);
        // onClose();
        navigation.navigate('BottomTabNavigator')
      })
      .catch((err) => {
        console.error(err);
        console.log(err.response.data);
        setErrorMessage("Invalid email or password"); 
      });
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.title}>Log in here</Text>
        <TextInput
          style={styles.input}
          value={emailValue}
          onChangeText={setEmailValue}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          value={passwordValue}
          onChangeText={setPasswordValue}
          placeholder="Password"
        />
        <View style={styles.buttons}>
          <Button title="Cancel" onPress={onClose} color="red" />
          <Button title="Submit" onPress={handleSubmit} />
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