import {
    GET_UPDATES,
    SET_LOADING,
    UPDATES_ERROR,
    ADD_UPDATE,
    EDIT_UPDATE,
    SEARCH_UPDATES,
    DELETE_UPDATE,
    SET_CURRENT,
    CLEAR_CURRENT
} from '../actions/types';

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
            };
        case ADD_UPDATE:
            return {
                ...state,
                updates: [...state.updates, action.payload],
                loading: false
            };
        case EDIT_UPDATE:
            return {
                ...state,
                updates: state.updates.map(update => update.id === action.payload.id ? action.payload : update )
            };
        case SEARCH_UPDATES:
            return {
                ...state,
                updates: action.payload
            };
        case DELETE_UPDATE:
            return {
                ...state,
                updates: state.updates.filter(update => update.id !== action.payload),
                loading: false
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
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
            };
        default:
        return state;
    }
}