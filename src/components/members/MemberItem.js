import React from 'react'
import PropTypes from 'prop-types'

const MemberItemModal = ({ member }) => {
    return (
        <div>
            <li className="collection-item">
                <div>
                    {member.firstName} {member.lastName}
                    <a href="" className="secondary-content">
                        <i className="material-icons grey-text">delete</i>
                    </a>
                </div>
            </li>
        </div>
    )
}

MemberItemModal.propTypes = {
    member: PropTypes.object.isRequired
}

export default MemberItemModal;
