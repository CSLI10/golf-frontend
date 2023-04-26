import React, { useState } from 'react';
import { View, Text, Modal, TextInput, StyleSheet, Button, ImageBackground, ActivityIndicator } from 'react-native';
 
const SignupForm = ({ visible, onClose, image }) => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
 
  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue('');
    onClose();
  };

  // const image = {uri: "https://cdn11.bigcommerce.com/s-k5xb3d5nlu/images/stencil/original/products/1018/4626/ANGC13Ri2570-Picture-Frame-Wall-Layouts-24x36-Rich-image1__58726.1647991906.jpg?c=2&imbypass=on&imbypass=on"}


  return (
    <Modal visible={visible} animationType="slide">
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>

      {/* <View style={styles.container}> */}
        <Text style={styles.title}>Sign up here</Text>
        <TextInput
          style={styles.input}
          value={nameValue}
          onChangeText={setNameValue}
          placecholder="Name"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.input}
          value={emailValue}
          onChangeText={setEmailValue}
          placecholder="Email"
          placeholderTextColor="grey"
        />
        <TextInput
          style={styles.input}
          value={passwordValue}
          onChangeText={setPasswordValue}
          placecholder="Password"
          placeholderTextColor="grey"
        />
        <View style={styles.buttons}>
          <Button title="Cancel" onPress={onClose} color="white" />
          <Button title="Submit" onPress={handleSubmit} color="white"/>
        </View>
      {/* </View> */}
      </ImageBackground>
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
    color: 'white'
  },
  image: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 0,
    marginVertical: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '70%',
    marginBottom: 20,
    backgroundColor: 'white'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});

export default SignupForm;