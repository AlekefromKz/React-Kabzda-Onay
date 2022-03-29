import React from 'react';
import s from './CloseFriends.module.css';
import CloseFriend from './CloseFriend/CloseFriend';

const CloseFriends = props => {
    let closeFriendsElements = props.state.closeFriends.map(cf => <CloseFriend name={cf.name} />);

    return (
        <div>
            My Close Friends
            {closeFriendsElements}
        </div>
    );
};

export default CloseFriends;
