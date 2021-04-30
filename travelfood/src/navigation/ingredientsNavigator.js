import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import IngredientsScreen from '../components/IngredientsEpic/IngredientsScreen';

const Stack = createStackNavigator()

function IngredientsNavigator() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="RecipesList" component={IngredientsScreen}/>
            </Stack.Navigator>
    )
}

export default IngredientsNavigator;