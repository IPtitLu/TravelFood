import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import RecipesNavigator from './recipesNavigator';
import IngredientsNavigator from './ingredientsNavigator';
import LoginNavigator from './loginNavigator';
import RestaurantsNavigator from './restaurantsNavigator';

const Stack = createStackNavigator()

const Tabs = createBottomTabNavigator()

function AppNavigation() {
    return  (
          <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name="Recettes" component={RecipesNavigator}/>
                <Tabs.Screen name="Restaurants" component={RestaurantsNavigator}/>
                <Tabs.Screen name="Ingredients" component={IngredientsNavigator}/>
                <Tabs.Screen name="Login" component={LoginNavigator}/>
            </Tabs.Navigator>
          </NavigationContainer>
    )
}

export default AppNavigation;