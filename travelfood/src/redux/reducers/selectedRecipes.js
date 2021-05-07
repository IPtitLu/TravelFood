import {SELECTED_RECIPE} from '../actionTypes';

const defaultState = [];

export const selectedRecipeList = (state = defaultState, action) => {
    switch(action.type) {
        case SELECTED_RECIPE: 
            return action.payload.data 
        default:
            return state
    }
}