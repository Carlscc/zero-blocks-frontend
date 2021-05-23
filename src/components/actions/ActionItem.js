import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const ActionItem = ({ action }) => {
    return (
        <li className='collection-item'>
            <div>
                <a href='#edit-action-modal' className={`modal-trigger ${action.attention ? 'red-text' : 'blue-text'
            }`}>{action.message}
            </a>
            <br/>
            <span className='grey-text'>
                <span className='black-text'>ID #{action.id}</span> last updated by <span
                 className='black-text'>{action.member}</span> on <Moment format='MMMM Do YYYY, h:mm:ss a'>{action.date}</Moment>
                 <a href='#!' className='secondary-content'>
                     <i className='material-icons grey-text'>delete</i>
                 </a>
            </span>
            </div>
        </li>
    )
}

ActionItem.propTypes = {
    action: PropTypes.object.isRequired,
}

export default ActionItem;
