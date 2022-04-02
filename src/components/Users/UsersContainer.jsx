import React from 'react';
import {connect} from 'react-redux';
import {followUser, loadUsers, setCurrentPage, unfollowUser} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from '../../redux/users-selector';

class UsersContainer extends React.Component {
    componentDidMount() {
        const { currentPage, pageSize, loadUsers } = this.props;
        loadUsers(currentPage, pageSize);
    }

    onPageChanged = pageNumber => {
        const { setCurrentPage, loadUsers, pageSize } = this.props;
        setCurrentPage(pageNumber);
        loadUsers(pageNumber, pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    unfollowUser={this.props.unfollowUser}
                    followUser={this.props.followUser}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        followUser,
        unfollowUser,
        setCurrentPage,
        loadUsers,
    }),
)(UsersContainer);
