import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId || 2;  // hardCode
        this.props.setUserProfile(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let withRouterProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withRouterProfileContainer);