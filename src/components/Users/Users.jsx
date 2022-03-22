import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => {
                        props.onPageChanged(p);
                    }}>{p}</span>
                })}
            </div>
            {
                props.users.map(user =>
                    <div key={user.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + user.id}>
                                        <img src={user.photos.small ? user.photos.small : userPhoto}
                                             className={styles.userPhoto}/>
                                    </NavLink>
                                </div>
                                <div>
                                    {!user.followed
                                        ? <button onClick={
                                            () => {
                                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/` + user.id, {}, {
                                                    withCredentials: true,
                                                    headers:{"API-KEY": "b9cc38bb-6512-4b47-bb62-a540d79d919f"}
                                                })
                                                    .then(response => {
                                                        if (response.data.resultCode === 0) {
                                                            props.followUser(user.id)
                                                        }
                                                    });
                                            }
                                        }>Follow</button>
                                        : <button onClick={
                                            () => {
                                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + user.id, {
                                                    withCredentials: true,
                                                    headers:{"API-KEY": "b9cc38bb-6512-4b47-bb62-a540d79d919f"}
                                                })
                                                    .then(response => {
                                                        if (response.data.resultCode === 0) {
                                                            props.unfollowUser(user.id)
                                                        }
                                                    });
                                            }
                                        }>Unfollow</button>
                                    }
                                </div>
                            </span>
                        <span>
                                <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    <div>{"user.location.country"}</div>
                                    <div>{"user.location.city"}</div>
                                </span>
                            </span>
                    </div>)
            }
        </div>
    )
}

export default Users;