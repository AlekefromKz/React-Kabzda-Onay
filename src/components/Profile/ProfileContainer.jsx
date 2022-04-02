import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getProfileStatus, getUserProfile, savePhoto, updateProfileStatus} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    refreshProfile(){
        const userId = this.props.match.params.userId || this.props.authorizedUserId;
        if (!userId){
            this.props.history.push("/login");
        }
        this.props.getUserProfile(userId);
        this.props.getProfileStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateProfileStatus={this.props.updateProfileStatus}
                isOwner={!this.props.match.params.userId}
                savePhoto={this.props.savePhoto}
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
        savePhoto,
    }),
    withRouter,
)(ProfileContainer);
