import React from 'react'
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { Button, NativeBaseProvider, extendTheme } from "native-base";
import BottomTabNavigator from './components/BottomTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShowCourseScreen from './screens/ShowCourseScreen';
import CoursesScreen from './screens/CoursesScreen';
import HomeScreen from './screens/HomeScreen';
import MeScreen from './screens/MeScreen';
import PlayScreen from './screens/PlayScreen';
import HoleScreen from './screens/HoleScreen';
import PlayCard from './components/PlayCard';
import WelcomeScreen from './screens/WelcomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginForm from './components/LoginForm';

const Stack = createStackNavigator();

export default function App() {
    const [authenticated, setAuthenticated] = useState(false);
  
    useEffect(() => {
      if (AsyncStorage.getItem("token")) {
        setAuthenticated(true);
      }
    }, []);
  
    const onAuthenticated = async (auth, token) => {
      setAuthenticated(auth);
  
      if (auth) {
        try{
            await AsyncStorage.setItem("token", token);
        }
        catch(e){
            console.log(e)
        }
      } else {
        try{
            await AsyncStorage.removeItem("token");
            console.log("removed token")
        }
        catch(e){
            console.log(e)
        }
      }
    };

  if(!authenticated){
    return <WelcomeScreen />
  }

  else{
    return (
        <NativeBaseProvider theme={theme}>
          <NavigationContainer> 
            <Stack.Navigator>
                <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }}/>
                <Stack.Screen name="CoursesScreen" component={CoursesScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="MeScreen" component={MeScreen} authenticated={authenticated} onAuthenticated={onAuthenticated}/>
                <Stack.Screen name="PlayScreen" component={PlayScreen} />
                <Stack.Screen name="ShowCourseScreen" component={ShowCourseScreen} />
                <Stack.Screen name="HoleScreen" component={HoleScreen} />
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="LoginForm" component={LoginForm} />
            </Stack.Navigator>
          </NavigationContainer>
          {/* <NavigationContainer>
            <BottomTabNavigator/>
          </NavigationContainer> */}
        </NativeBaseProvider>
      );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const newColorTheme = {
  brand: {
    900: '#5B8DF6',
    800: '#ffffff',
    700: '#cccccc',
  },
};

const theme = extendTheme({
colors: newColorTheme,
});
