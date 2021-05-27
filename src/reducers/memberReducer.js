import {
    GET_MEMBERS,
    ADD_MEMBER,
    DELETE_MEMBER,
    SET_LOADING,
    MEMBERS_ERROR
} from '../actions/types';

const initialState = {
    members: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_MEMBERS:
            return {
                ...state,
                members: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state
    }
}