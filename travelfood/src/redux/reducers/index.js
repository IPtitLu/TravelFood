import {combineReducers} from 'redux';

import {recipesList} from './recipesList';
import {selectedRecipeList} from './selectedRecipesList';
import {ingredientsList} from './ingredientsList';
import {restaurantsList} from './restaurantsList';
import {selectedRestaurantList} from './selectedRestaurantList';

export default combineReducers({
    recipesList,
    selectedRecipeList,
    ingredientsList,
    restaurantsList,
    selectedRestaurantList,
})