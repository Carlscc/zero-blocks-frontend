import { GET_UPDATES, SET_LOADING, UPDATES_ERROR } from './types';

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