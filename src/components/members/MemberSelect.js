import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMembers } from '../../actions/memberActions';

const MemberSelect = ({ getMembers, member: { members, loading } }) => {
    useEffect(() => {
        getMembers();
        //eslint-disable-next-line
    },[]);

    return (
        !loading &&
        members !== null &&
        members.map(m => (
            <option key={m.id} value={`${m.firstName} ${m.lastName}`}>
                {m.firstName} {m.lastName}
            </option>
        ))
    );
};

MemberSelect.propTypes = {
    member: PropTypes.object.isRequired,
    getMembers: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    member: state.member
})

export default connect(mapStateToProps, { getMembers })(MemberSelect);
