import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const UpdateItem = ({ update }) => {
    return (
        <li className='collection-item'>
            <div>
                <a href='#edit-update-modal' className={`modal-trigger ${update.attention ? 'red-text' : 'blue-text'
            }`}>{update.message}
            </a>
            <br/>
            <span className='grey-text'>
                <span className='black-text'>ID #{update.id}</span> last updated by <span
                 className='black-text'>{update.member}</span> on <Moment format='MMMM Do YYYY, h:mm:ss a'>{update.date}</Moment>
                 <a href='#!' className='secondary-content'>
                     <i className='material-icons grey-text'>delete</i>
                 </a>
            </span>
            </div>
        </li>
    )
}

UpdateItem.propTypes = {
    update: PropTypes.object.isRequired,
}

export default UpdateItem;
