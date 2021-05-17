import {SELECTED_RESTAURANT} from '../actionTypes';

const defaultState = [];

export const selectedRestaurantList = (state = defaultState, action) => {
    switch(action.type) {
        case SELECTED_RESTAURANT: 
            return action.payload.data 
        default:
            return state
    }
}