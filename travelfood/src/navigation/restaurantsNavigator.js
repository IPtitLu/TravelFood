import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import RestaurantsListScreen from '../components/RestaurantsEpic/RestaurantsScreen';
import RestaurantsDetailScreen from '../components/RestaurantsEpic/RestaurantsDetailScreen';

const Stack = createStackNavigator()

function RestaurantsNavigator() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="RestaurantsList" component={RestaurantsListScreen}/>
                <Stack.Screen name="RestaurantDetails" component={RestaurantsDetailScreen}/>
            </Stack.Navigator>
    )
}

export default RestaurantsNavigator;