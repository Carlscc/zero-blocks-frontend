import { GET_UPDATES, SET_LOADING, UPDATES_ERROR, ADD_UPDATE, DELETE_UPDATE, SET_CURRENT, CLEAR_CURRENT, EDIT_UPDATE } from './types';

// Get team updates from server
export const getUpdates = () =>  async dispatch => {
        try {
            setLoading();

            const res = await fetch('/updates');
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
export const addUpdates = update =>  async dispatch => {
    try {
        setLoading();

        const res = await fetch('/updates', {
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

// Set current update
export const setCurrent = update => {
    return {
        type: SET_CURRENT,
        payload: update
    }
}

// Clear current update
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

// Delete update from server
export const deleteUpdates = id =>  async dispatch => {
    try {
        setLoading();

        await fetch(`/updates/${id}`, {
            method: 'DELETE',
        });

        dispatch({
            type: DELETE_UPDATE,
            payload: id
        });

    } catch (err) {
        dispatch({
            type: UPDATES_ERROR,
            payload: err.response.data
        })
    }
}
// Edit team update
export const editUpdates = update =>  async dispatch => {
    try {
        setLoading();

        const res = await fetch(`/updates/${update.id}`, {
            method: 'PUT',
            body: JSON.stringify(update),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: EDIT_UPDATE,
            payload: data
        });

    } catch (err) {
        dispatch({
            type: UPDATES_ERROR,
            payload: err.response.data
        })
    }
}