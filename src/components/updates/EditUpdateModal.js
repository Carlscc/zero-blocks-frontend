import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js/';

const EditUpdateModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [member, setMember] = useState('')

    const onSubmit = () => {
        if(message === '' || member === '') {
            M.toast({ html: 'Please enter an update and your name'})
        } else {
            console.log(message, member, attention);
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
                        <option value="Person 1">Person 1</option>
                        <option value="Person 2">Person 2</option>
                        <option value="Person 3">Person 3</option>
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

export default EditUpdateModal;
