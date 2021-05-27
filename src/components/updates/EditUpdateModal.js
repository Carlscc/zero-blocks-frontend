import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MemberSelect from '../members/MemberSelect';
import { editUpdates, setCurrent } from '../../actions/updateActions';
import M from 'materialize-css/dist/js/materialize.min.js/';

const EditUpdateModal = ({ current, editUpdates }) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [member, setMember] = useState('');

    useEffect(() => {
        if(current) {
            setMessage(current.message);
            setAttention(current.attention);
            setMember(current.member);
        }
    }, [current]);

    const onSubmit = () => {
        if(message === '' || member === '') {
            M.toast({ html: 'Please enter an update and your name'})
        } else {
            const editUpd = {
                id: current.id,
                message,
                attention,
                member,
                date: new Date()
            };

            editUpdates(editUpd);
            M.toast({ html: `Updated edited by ${member}`})
            // Clear Fields
            setMessage('');
            setMember('');
            setAttention(false);
        }
    };
    return (
        <div id="edit-update-modal" className="modal" style={modalStyle}>
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
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue btn">Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
};

EditUpdateModal.propTypes = {
    current: PropTypes.object,
    editUpdates: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    current: state.update.current
});

export default connect(mapStateToProps, { editUpdates })(EditUpdateModal);
