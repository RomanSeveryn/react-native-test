import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Container from '../../components/container';
import Input from '../../components/input';
import CustomButton from '../../components/customButton';


const Login = () => {
    const [text, onChangeText] = React.useState("")

    return (
        <Container>
      <Input
            label="Username"
            onChangeText={(text) => onChangeText(text)}
            value={text}
            iconPosition="right"
            // error="This field is required"
      />
      <Input
            label="Password"
            onChangeText={(text) => onChangeText(text)}
            value={text}
            icon={<Text>HIDE</Text>}
            iconPosition="left"
      />

      <CustomButton title="Submit" loading={true} disable={true} secondary/>
      <CustomButton title="Click Me" secondary loading/>
      <CustomButton title="Submit" loading={true} disable={true} primary/>
      <CustomButton title="Submit" danger/>

        </Container>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default Login;