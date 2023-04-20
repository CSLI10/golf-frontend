import React, { useState } from 'react';
import { View, Text, Modal, TextInput, StyleSheet, Button } from 'react-native';
 
const SignupForm = ({ visible, onClose }) => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
 
  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue('');
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.title}>Sign up here</Text>
        <TextInput
          style={styles.input}
          value={nameValue}
          onChangeText={setNameValue}
          placecholder="Name"
        /> 
        <TextInput
          style={styles.input}
          value={emailValue}
          onChangeText={setEmailValue}
          placecholder="Email"
        />
        <TextInput
          style={styles.input}
          value={passwordValue}
          onChangeText={setPasswordValue}
          placecholder="Password"
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

export default SignupForm;