import initialState from "../store/initialState";
import * as  Actions  from './actions'

export const ItemReducer = (state = initialState.item, action) => {
    switch(action.type) {
        case Actions.FETCH_ITEM:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
};