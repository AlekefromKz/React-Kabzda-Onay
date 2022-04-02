import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = props => {
    if (!props.profile) {
        return <Preloader />;
    }

    const profile = props.profile;

    const avaSelected = (e) =>{
        if (e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={s.profileDescriprion}>
                <p>
                    Full name: <b>{profile.fullName}</b>
                </p>
                <img src={profile.photos?.large || userPhoto} className={s.userPhoto}/>
                {props.isOwner && <input type="file" onChange={avaSelected}/>}
                <p>
                    About me: <b>{profile.aboutMe}</b>
                </p>
                <div>
                    <ProfileStatusWithHook status={props.status} updateProfileStatus={props.updateProfileStatus} />
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
