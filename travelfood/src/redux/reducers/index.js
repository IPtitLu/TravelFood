import {combineReducers} from 'redux';

import {recipesList} from './recipesList';
import {selectedRecipeList} from './selectedRecipes';
import {ingredientsList} from './ingredientsList';

export default combineReducers({
    recipesList,
    selectedRecipeList,
    ingredientsList,
})