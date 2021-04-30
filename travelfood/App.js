import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppNavigation from './src/navigation'

import store from './src/redux/store';
import RecipesListScreen from './src/components/RecipesEpic/RecipesListScreen';
import RecipesDetailScreen from './src/components/RecipesEpic/RecipesDetailScreen';

const Stack = createStackNavigator()

const Tabs = createBottomTabNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex:1}}>
          <AppNavigation/>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
