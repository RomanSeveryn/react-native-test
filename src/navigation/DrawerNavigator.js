import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePageNavigater from './HomePageNavigator';


const Login = () => {
    return (
        <Text>Hello Login</Text>
    )
}

const SignUp = () => {
    return (
        <Text>Hello SignUp</Text>
    )
}


const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator()
    return (
       <Drawer.Navigator>
           <Drawer.Screen name='Home' component={HomePageNavigater}/>
           <Drawer.Screen name='Homes' component={HomePageNavigater}/>
       </Drawer.Navigator>
        
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

export default DrawerNavigator;