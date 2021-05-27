import {
    GET_MEMBERS,
    ADD_MEMBER,
    DELETE_MEMBER,
    SET_LOADING,
    MEMBERS_ERROR
} from './types';

// Get members from server
export const getMembers = () =>  async dispatch => {
    try {
        setLoading();

        const res = await fetch('/members');
        const data = await res.json();

        dispatch({
            type: GET_MEMBERS,
            payload: data
        });

    } catch (err) {
        dispatch({
            type: MEMBERS_ERROR,
            payload: err.response.statusText
        });
    }
};



// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};