export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

// Action creator for adding an item
export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item,
});

// Action creator for removing an item
export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    payload: id, 
});
