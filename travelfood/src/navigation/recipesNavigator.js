import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import RecipesListScreen from '../components/RecipesEpic/RecipesListScreen';
import RecipesDetailScreen from '../components/RecipesEpic/RecipesDetailScreen';

const Stack = createStackNavigator()

function RecipesNavigator() {
    return (
            <Stack.Navigator>
                <Stack.Screen name="RecipesList" component={RecipesListScreen}/>
                <Stack.Screen name="RecipesDetails" component={RecipesDetailScreen}/>
            </Stack.Navigator>
    )
}

export default RecipesNavigator;