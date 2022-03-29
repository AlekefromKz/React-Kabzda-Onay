import React from 'react';
import CloseFriend from './CloseFriend/CloseFriend';

const CloseFriends = props => {
    let closeFriendsElements = props.state.closeFriends.map(cf => <CloseFriend name={cf.name}/>);

    return (
        <div>
            My Close Friends
            {closeFriendsElements}
        </div>
    );
};

export default CloseFriends;
