import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followUserAC, loadUsersAC, unfollowUserAC} from "../../redux/users-reducer";

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
        loadUsers: (users) => {
            dispatch(loadUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
