import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteMember } from '../../actions/memberActions';
import M from 'materialize-css/dist/js/materialize.min.js/';

const MemberItemModal = ({ member: { firstName, lastName, id }, deleteMember }) => {
    const onDelete = () => {
        deleteMember(id);
        M.toast({ html: 'Team member deleted'})
    };

    return (
        <div>
            <li className="collection-item">
                <div>
                    {firstName} {lastName}
                    <a href="" aria-label="delete" className="secondary-content" onClick={onDelete}>
                        <i className="material-icons grey-text">delete</i>
                    </a>
                </div>
            </li>
        </div>
    )
};

MemberItemModal.propTypes = {
    member: PropTypes.object.isRequired,
    deleteMember: PropTypes.func.isRequired
};

export default connect(null, { deleteMember })(MemberItemModal);
