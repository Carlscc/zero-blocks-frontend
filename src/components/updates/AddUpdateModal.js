import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUpdates } from '../../actions/updateActions';
import MemberSelect from '../members/MemberSelect';
import M from 'materialize-css/dist/js/materialize.min.js/';

const AddUpdateModal = ({ addUpdates }) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [member, setMember] = useState('');

    const onSubmit = () => {
        if(message === '' || member === '') {
            M.toast({ html: 'Please enter an update and your name'})
        } else {
            const newUpdate = {
                message,
                attention,
                member,
                date: new Date()
            };

            addUpdates(newUpdate);

            M.toast({ html: `Update added by ${member}` });

            // Clear Fields
            setMessage('');
            setMember('');
            setAttention(false);
        }
    };
    return (
        <div id="add-update-modal" className="modal">
            <div className="modal-content">
                <h5>What did you work on since yesterday's standup?</h5>
                <div className="row">
                    <div className="input-field">
                        <input
                        type="text"
                        name="message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        />
                        <label htmlFor="message" className="active">Add Update</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <select
                        name="member"
                        value={member}
                        className="browser-default"
                        onChange={e => setMember(e.target.value)}>
                        <option value="" disabled>
                            Add your name
                        </option>
                        <MemberSelect />
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input
                                type="checkbox"
                                className="filled-in"
                                checked={attention}
                                value={attention}
                                onChange={e => setAttention(!attention)} />
                                <span>Incomplete - To discuss further</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <button type="button" onClick={onSubmit} className="modal-close waves-effect blue btn">Enter</button>
            </div>
        </div>
    )
};

AddUpdateModal.propTypes = {
    addUpdates: PropTypes.func.isRequired
};

export default connect(null, { addUpdates })(AddUpdateModal);
