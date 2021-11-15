import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import HomePageNavigator from './HomePageNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppContainer = () => {
    const isLoggedIn = true;
    return (
        <NavigationContainer>
            {isLoggedIn ? <DrawerNavigator/> : <AuthNavigator/>}
          {/* <AuthNavigator/> */}
          {/* <HomePageNavigator/> */}
          {/* <DrawerNavigator/> */}
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

export default AppContainer;