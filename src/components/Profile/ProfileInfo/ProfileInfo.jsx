import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const profile = props.profile;

    return (
        <div>
            <div className={s.profileDescriprion}>
                <p>Full name: <b>{profile.fullName}</b></p>
                <img src={profile.photos?.large}/>
                <p>About me: <b>{profile.aboutMe}</b></p>
                <div>
                    <ProfileStatus status={props.status} updateProfileStatus={props.updateProfileStatus}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;