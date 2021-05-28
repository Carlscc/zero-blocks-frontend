import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UpdateItem from './UpdateItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getUpdates } from '../../actions/updateActions';

const Updates = ({ update: { updates, loading }, getUpdates }) => {

    useEffect(() => {
        getUpdates();
        // eslint-disable-next-line
    }, []);

    if(loading || updates === null) {
        return <Preloader/>
    };

    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>ZeroBlocks - Daily Tracker</h4>
            </li>
            {!loading && updates.length === 0 ? (
            <p className='center'>No updates to show...</p>
            ) : (
                updates.map(update => <UpdateItem update={update} key={update.id} />)
            )}
        </ul>
    );
};

Updates.propTypes = {
    update: PropTypes.object.isRequired,
    getUpdates: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    update: state.update
});

export default connect(
    mapStateToProps,
    { getUpdates }
    )(Updates);
