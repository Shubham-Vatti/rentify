import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/Auth/LoginScreen';
import BottomStack from './BottomStack';
// import WelcomeScreen from '../Screens/WelcomeScreen';

const Stack = createStackNavigator();

export type RootStackList = {
  SplashScreen1: undefined;
  LoginScreen1:undefined;
  BottomStack:undefined
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        presentation: 'transparentModal',
      }}>
      <Stack.Screen name="SplashScreen1" component={SplashScreen} />
      <Stack.Screen name="LoginScreen1" component={LoginScreen} />
      <Stack.Screen name="BottomStack" component={BottomStack} />
      {/* <Stack.Screen name="WelcomeScreen2" component={WelcomeScreen} /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
