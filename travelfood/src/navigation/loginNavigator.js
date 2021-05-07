import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import LoginScreen from '../components/LoginEpic/LoginScreen';
import ProfilScreen from '../components/ProfilEpic/ProfilScreen';
import SignUpScreen from '../components/SignUpEpic/SignUpScreen';

const Stack = createStackNavigator()

function LoginNavigator() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Profile" component={ProfilScreen}/>
                <Stack.Screen name="SignUp" component={SignUpScreen}/>
            </Stack.Navigator>
    )
}

export default LoginNavigator;