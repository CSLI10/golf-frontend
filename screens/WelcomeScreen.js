import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const WelcomeScreen = ({ navigation }) => {
    const [loginVisible, setLoginVisible] = useState(false);
    const [signupVisible, setSignupVisible] = useState(false);

    const handleOpenLogin = () => {
        setLoginVisible(true);
    };

    const handleOpenSignup = () => {
        setSignupVisible(true);
    };
    
    const handleCloseLogin = () => {
        setLoginVisible(false);
        
    };

    const handleCloseSignup = () => {
        setSignupVisible(false);
    };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Button title="Log In" onPress={handleOpenLogin} color="white"/>
      <LoginForm 
          visible={loginVisible}
          onClose={handleCloseLogin}
          navigation={navigation}
      />
      <Button title="Sign Up" onPress={handleOpenSignup} color="white"/>
      <SignupForm 
         visible={signupVisible}
         onClose={handleCloseSignup}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: "#148eb0"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "white" 
  },
});

export default WelcomeScreen;