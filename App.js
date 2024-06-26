import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import Analyzer from "./screens/Analyzer";
import Result from "./screens/Result";
import Scanner from "./screens/Scanner";

const Stack = createStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Analyzer" component={Analyzer}/>
        <Stack.Screen name="Result" component={Result}/>
        <Stack.Screen name="Scanner" component={Scanner}/>
        </Stack.Navigator> 
      </NavigationContainer>
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
