import { ADD_ITEM, REMOVE_ITEM } from './actions';

const initialState = {
    items: [],
};

// Root reducer for managing state
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload], 
            };
        case REMOVE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload), 
            };
        default:
            return state; 
    }
};

export default rootReducer;
