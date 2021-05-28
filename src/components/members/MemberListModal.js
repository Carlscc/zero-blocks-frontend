import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MemberItem from './MemberItem';
import { getMembers } from '../../actions/memberActions';

const MemberListModal = ({ getMembers, member: { members, loading } }) => {
    useEffect(() => {
        getMembers();
        // eslint-disable-next-line
    }, []);

    return (
        <div id="member-list-modal" className="modal">
            <div className="modal-content">
                <h5>Team Member List</h5>
                <ul className="collection">
                    {!loading &&
                    members !== null &&
                    members.map(member => <MemberItem member={member} key={member.id} />)}
                </ul>
            </div>
        </div>
    );
};

MemberListModal.propTypes = {
    member: PropTypes.object.isRequired,
    getMembers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    member: state.member
});

export default connect(mapStateToProps, { getMembers })(MemberListModal);
