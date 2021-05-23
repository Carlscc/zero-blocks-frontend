import React, { useState, useEffect } from 'react';
import MemberItem from './MemberItem';

const MemberListModal = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getMembers();
        // eslint-disable-next-line
    }, []);

    const getMembers = async () => {
        setLoading(true);
        const res = await fetch('/members');
        const data = await res.json();

        setMembers(data);
        setLoading(false);
    }

    return (
        <div id="member-list-modal" className="modal">
            <div className="modal-content">
                <h5>Team Member List</h5>
                <ul className="collection">
                    {!loading &&
                    members.map(member => (
                        <MemberItem
                        member={member}
                        key={member.id}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MemberListModal;
