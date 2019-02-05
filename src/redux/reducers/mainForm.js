import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {

};

export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state
            };
        }
        case TOGGLE_TODO: {
            return {
                ...state
            };
        }
        default:
            return state;
    }
}
