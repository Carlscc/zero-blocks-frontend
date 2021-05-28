import {
    GET_MEMBERS,
    ADD_MEMBER,
    DELETE_MEMBER,
    SET_LOADING,
    MEMBERS_ERROR
} from './types';

// Get team members from server
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

// Add team members
export const addMember = member =>  async dispatch => {
    try {
        setLoading();

        const res = await fetch('/members', {
            method: 'POST',
            body: JSON.stringify(member),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_MEMBER,
            payload: data
        });

    } catch (err) {
        dispatch({
            type: MEMBERS_ERROR,
            payload: err.response.statusText
        });
    }
};

// Delete team members
export const deleteMember = id =>  async dispatch => {
    try {
        setLoading();

        await fetch(`/members/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_MEMBER,
            payload: id
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