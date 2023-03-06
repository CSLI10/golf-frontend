import React from 'react'
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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer> 
        <Stack.Navigator>
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }}/>
            <Stack.Screen name="CoursesScreen" component={CoursesScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="MeScreen" component={MeScreen} />
            <Stack.Screen name="PlayScreen" component={PlayScreen} />
            <Stack.Screen name="ShowCourseScreen" component={ShowCourseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer> */}
    </NativeBaseProvider>
  );
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
