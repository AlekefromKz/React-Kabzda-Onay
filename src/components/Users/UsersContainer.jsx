import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followUserAC, setUsersAC, unfollowUserAC} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followUserAC(userId));
        },
        unfollowUser: (userId) => {
            dispatch(unfollowUserAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
