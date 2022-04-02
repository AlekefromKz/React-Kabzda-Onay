import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import {NavLink} from 'react-router-dom';

const User = ({ user, followingInProgress, followUser, unfollowUser }) => {
    return (
        <div>
            <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img alt={""} src={user.photos.small ? user.photos.small : userPhoto} className={styles.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {!user.followed ? (
                            <button
                                disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    followUser(user.id);
                                }}
                            >
                                Follow
                            </button>
                        ) : (
                            <button
                                disabled={followingInProgress.some(id => id === user.id)}
                                onClick={() => {
                                    unfollowUser(user.id);
                                }}
                            >
                                Unfollow
                            </button>
                        )}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>
            </div>
        </div>
    );
};

export default User;
