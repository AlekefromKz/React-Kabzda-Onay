import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ profile, status, updateProfileStatus, isOwner, savePhoto, saveProfile, profileUpdatedSuccess }) => {
    return (
        <div>
            <ProfileInfo
                profile={profile}
                status={status}
                updateProfileStatus={updateProfileStatus}
                isOwner={isOwner}
                savePhoto={savePhoto}
                saveProfile={saveProfile}
                profileUpdatedSuccess={profileUpdatedSuccess}
            />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
