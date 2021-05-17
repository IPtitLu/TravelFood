import {ADD_RESTAURANTS} from '../actionTypes';

const defaultState = [];

export const restaurantsList = (state = defaultState, action) => {
    switch(action.type) {
        case ADD_RESTAURANTS: 
            return action.payload.data 
        default:
            return state
    }
}