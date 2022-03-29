import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getProfileStatus, getUserProfile, updateProfileStatus} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId || this.props.authorizedUserId;
        this.props.getUserProfile(userId);
        this.props.getProfileStatus(userId);
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateProfileStatus={this.props.updateProfileStatus}
            />
        );
    }
}

const mapStateToProps = state => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    auth: state.auth,
    authorizedUserId: state.auth.userId,
    isAuthorized: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getProfileStatus,
        updateProfileStatus,
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);
