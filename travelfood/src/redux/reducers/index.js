import {combineReducers} from 'redux';

import {recipesList} from './recipesList';
import {selectedRecipe} from './selectedRecipes';
import {ingredientsList} from './ingredientsList';

export default combineReducers({
    recipesList,
    selectedRecipe,
    ingredientsList,
})