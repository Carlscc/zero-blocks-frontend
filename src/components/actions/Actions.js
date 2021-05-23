import React, { useState, useEffect } from 'react';
import ActionItem from './ActionItem';
import Preloader from '../layout/Preloader';

const Actions = () => {
    const [actions, setActions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getActions();
        // eslint-disable-next-line
    }, []);

    const getActions = async () => {
        setLoading(true);
        const res = await fetch('/actions');
        const data = await res.json();

        setActions(data);
        setLoading(false);
    }

    if(loading) {
        return <Preloader/>
    }

    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>ZeroBlocks - Daily Tracker</h4>
            </li>
            {!loading && actions.length === 0 ? (
            <p className='center'>No actions to show...</p>
            ) : (
                actions.map(action => <ActionItem action={action} key={action.id} />)
            )}
        </ul>
    );
};

export default Actions;
