import React from 'react';

const AddBtn = () => {
    return (
        <div className="fixed-action-btn">
            <a href="#add-update-modal" className="btn-floating btn-large purple darken-2 pulse modal-trigger">
                <i className="large material-icons">add</i>
            </a>
            <ul>
                <li>
                    <a href="#member-list-modal" className="btn-floating green modal-trigger">
                        <i className="material-icons">person</i>
                    </a>
                </li>
                <li>
                    <a href="#add-member-modal" className="btn-floating blue modal-trigger">
                        <i className="material-icons">person_add</i>
                    </a>
                </li>
            </ul>
        </div>
    )
};

export default AddBtn;
