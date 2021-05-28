import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteUpdates, setCurrent } from '../../actions/updateActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const UpdateItem = ({ update, deleteUpdates, setCurrent }) => {
    const onDelete = () => {
        deleteUpdates(update.id)
        M.toast({ html: 'Update deleted' })
    };

    return (
        <li className='collection-item'>
            <div>
                <a
                    href='#edit-update-modal'
                    className={`modal-trigger ${
                    update.attention ? 'red-text' : 'blue-text'
                    }`}
                    onClick={() => setCurrent(update)}
                >
                {update.message}
            </a>
            <br/>
            <span className='grey-text'>
                <span className='black-text'>ID #{update.id}</span> last updated by <span
                 className='black-text'>{update.member}</span> on <Moment format='MMMM Do YYYY, h:mm:ss a'>{update.date}</Moment>
                 <a href='#!' aria-label="delete" className='secondary-content' onClick={onDelete}>
                     <i className='material-icons grey-text'>delete</i>
                 </a>
            </span>
            </div>
        </li>
    )
};

UpdateItem.propTypes = {
    update: PropTypes.object.isRequired,
    deleteUpdates: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired
};

export default connect(null, { deleteUpdates, setCurrent })(UpdateItem);
