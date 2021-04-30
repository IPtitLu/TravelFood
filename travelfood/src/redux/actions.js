import {ADD_RECIPES, SELECTED_RECIPE, ADD_INGREDIENTS} from './actionTypes';

// action = {type: NOM_ACTION, payload: data}
export const fetchRecipesAction = data => ({
    type: ADD_RECIPES,
    payload: {
        data,
    },
});

export const fetchSelectedRecipesAction = data => ({
    type: SELECTED_RECIPE,
    payload: {
        data,
    },
});

export const fetchIngredientsAction = data => ({
    type: ADD_INGREDIENTS,
    payload: {
        data,
    },
});