import React, {useEffect, useState} from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/user.png';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = props => {
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (props.profileUpdatedSuccess){
            setEditMode(false);
        }
    }, [props.profileUpdatedSuccess])


    if (!props.profile) {
        return <Preloader />;
    }

    const profile = props.profile;

    const uploadAva = e => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };

    const onProfileDataSubmit = data => {
        props.saveProfile(data)
    };

    return (
        <div>
            {editMode ? (
                <ProfileDataForm initialValues={profile} onSubmit={onProfileDataSubmit} profile={profile} />
            ) : (
                <ProfileData
                    profile={profile}
                    isOwner={props.isOwner}
                    avaSelected={uploadAva}
                    activateEditMode={() => setEditMode(true)}
                    updateProfileStatus={props.updateProfileStatus}
                    status={props.status}
                />
            )}
        </div>
    );
};

const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div>
            <b>{contactTitle}</b> {contactValue}
        </div>
    );
};

const ProfileData = ({ profile, isOwner, avaSelected, activateEditMode, status, updateProfileStatus }) => {
    return (
        <div>
            <img alt={""} src={profile.photos?.large || userPhoto} className={s.userPhoto} />
            {isOwner && <input type="file" onChange={avaSelected} />}
            <ProfileStatus status={status} updateProfileStatus={updateProfileStatus} />
            <div className={s.profileDescriprion}>
                {isOwner && (
                    <div>
                        <button onClick={activateEditMode}>Edit Profile</button>
                    </div>
                )}
                <p>
                    Full name: <b>{profile.fullName}</b>
                </p>

                <div>
                    <b>About me:</b> {profile.aboutMe}
                </div>

                <div>
                    <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
                </div>

                {profile.lookingForAJob && (
                    <div>
                        <b>Job description</b> {profile.lookingForAJobDescription}
                    </div>
                )}

                <div className={s.contacts}>
                    <b>Contacts:</b>{' '}
                    {Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
