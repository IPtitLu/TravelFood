import {ADD_INGREDIENTS} from '../actionTypes';

const defaultState = [];

export const ingredientsList = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_INGREDIENTS:
            //payload : {data: data}
            return action.payload.data
        default: 
            return state 
    }
};