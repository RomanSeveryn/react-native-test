import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';


const SignUp = () => {
    return (
        <Text>Hello SignUp</Text>
    )
}


const AuthNavigator = () => {
    const AuthStack = createStackNavigator()
    return (
       <AuthStack.Navigator screenOptions={{headerShown: false}}>
           <AuthStack.Screen name='Login' component={Login}/>
           <AuthStack.Screen name='SetSignUpting' component={SignUp}/>
       </AuthStack.Navigator>
        
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

export default AuthNavigator;