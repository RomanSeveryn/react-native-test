import { StatusBar } from 'expo-status-bar';
import React, {useContext} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import HomePageNavigator from './HomePageNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/Provider';

const AppNavContainer = () => {
    // const isLoggedIn = true;
    const {
      authState: {isLoggedIn},
    } = useContext(GlobalContext)

    console.log('isLoggedIn!!!', isLoggedIn);
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

export default AppNavContainer;