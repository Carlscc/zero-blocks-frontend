import { GET_UPDATES, SET_LOADING, UPDATES_ERROR, ADD_UPDATE } from '../actions/types';

const initialState = {
    updates: null,
    current: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_UPDATES:
            return {
                ...state,
                updates: action.payload,
                loading: false
            }
        case ADD_UPDATE:
            return {
                ...state,
                updates: [...state.updates, action.payload],
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case UPDATES_ERROR:
            console.error(action.payload)
            return {
                ...state,
                error: action.payload
            }
        default:
        return state;
    }
}