import { GET_UPDATES, SET_LOADING, UPDATES_ERROR, ADD_UPDATE } from './types';

// Get team updates from server
export const getUpdates = () =>  async dispatch => {
        try {
            setLoading();

            const res = await fetch('./updates');
            const data = await res.json();

            dispatch({
                type: GET_UPDATES,
                payload: data
            })

        } catch (err) {
            dispatch({
                type: UPDATES_ERROR,
                payload: err.response.data
            })
        }
}

// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

// Add team updates

export const addUpdates = (update) =>  async dispatch => {
    try {
        setLoading();

        const res = await fetch('./updates', {
            method: 'POST',
            body: JSON.stringify(update),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_UPDATE,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: UPDATES_ERROR,
            payload: err.response.data
        })
    }
}