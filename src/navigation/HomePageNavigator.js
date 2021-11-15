import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Contacts from '../screens/contacts';


const Setting = () => {
    return (
        <Text>Hello Setting</Text>
    )
}

const ContactContact = () => {
    return (
        <Text>Hello ContactContact</Text>
    )
}

const SettingSetting = () => {
    return (
        <Text>Hello SettingSetting</Text>
    )
}

const HomePageNavigator = () => {
    const HomeStack = createStackNavigator()
    return (
       <HomeStack.Navigator initialRouteName='Contact'>
           <HomeStack.Screen name='Contact' component={Contacts}/>
           <HomeStack.Screen name='Setting' component={Setting}/>
           <HomeStack.Screen name='ContactContact' component={ContactContact}/>
           <HomeStack.Screen name='SettingSetting' component={SettingSetting}/>
       </HomeStack.Navigator>
        
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

export default HomePageNavigator;