import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({profile, status, updateProfileStatus}) => {
    return (
        <div>
            <ProfileInfo
                profile={profile}
                status={status}
                updateProfileStatus={updateProfileStatus}
            />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;
