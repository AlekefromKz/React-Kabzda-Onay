import React from "react";
import styles from "./users.module.css";

const Users = (props) => {
    const users = [
        {
            id: 1,
            fullName: "Almaz",
            status: "Practice makes perfect",
            followed: true,
            location: {city: "Tallinn", country: "Estonia"},
            photoUrl: "https://astanatimes.com/wp-content/uploads/2020/05/Dimash-Kudaibergen-performing-at-the-ABU-Song-Festival-in-Tokyo-Japan.-Photo-credit-inform.kz_.jpg",
        },
        {
            id: 2,
            fullName: "Alikhan",
            status: "It does",
            followed: false,
            location: {city: "Almaty", country: "Kazakhstan"},
            photoUrl: "https://astanatimes.com/wp-content/uploads/2020/05/Dimash-Kudaibergen-performing-at-the-ABU-Song-Festival-in-Tokyo-Japan.-Photo-credit-inform.kz_.jpg",
        },
        {
            id: 3,
            fullName: "Madiyar",
            status: "Indeed",
            followed: true,
            location: {city: "Astana", country: "Kazakhstan"},
            photoUrl: "https://astanatimes.com/wp-content/uploads/2020/05/Dimash-Kudaibergen-performing-at-the-ABU-Song-Festival-in-Tokyo-Japan.-Photo-credit-inform.kz_.jpg",
        },
    ]

    if (props.users.length === 0) {
        props.loadUsers(
            users
        )
    }

    return <div>
        {
            props.users.map(user => <div key={user.id}>
            <span>
                <div><img src={user.photoUrl} className={styles.userPhoto}/></div>
                <div>
                    {user.followed
                        ? <button onClick={() => props.unfollowUser(user.id)}>Unfollow</button>
                        : <button onClick={() => props.followUser(user.id)}>Follow</button>
                    }
                </div>
            </span>
                <span>
                <span>
                    <div>{user.fullName}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>
                </span>
            </span>

            </div>)
        }
    </div>
}

export default Users;
