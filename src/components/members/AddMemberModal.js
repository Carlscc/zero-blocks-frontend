import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addMember } from '../../actions/memberActions';
import M from 'materialize-css/dist/js/materialize.min.js/';

const AddMemberModal = ({ addMember }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if(firstName === '' || lastName === '') {
            M.toast({ html: 'Please enter your first and last name'})
        } else {
            addMember({
                firstName,
                lastName
            });

            M.toast({ html: `${firstName} ${lastName} was added as a team member` });

            // Clear Fields
            setFirstName('');
            setLastName('');
        }
    };
    return (
        <div id="add-member-modal" className="modal">
            <div className="modal-content">
                <h5>Add New Team Member</h5>
                <div className="row">
                    <div className="input-field">
                        <input
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        />
                        <label htmlFor="firstName" className="active">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        />
                        <label htmlFor="lastName" className="active">Last Name</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" onClick={onSubmit} className="modal-close waves-effect blue btn">Enter</button>
            </div>
        </div>
    );
};

AddMemberModal.propTypes = {
    addMember: PropTypes.func.isRequired
};

export default connect(null, { addMember })(AddMemberModal);
