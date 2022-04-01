import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({
                   currentPage,
                   onPageChanged,
                   totalUsersCount,
                   pageSize,
                   users,
                   followingInProgress,
                   followUser,
                   unfollowUser
               }) => {
    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>
            {users.map(user => (
                <User key={user.id} user={user} followingInProgress={followingInProgress} followUser={followUser}
                      unfollowUser={unfollowUser}/>
            ))}
        </div>
    );
};

export default Users;
