import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile){
        return <Preloader/>
    }

    const profile = props.profile;

    return (
        <div>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
            </div>
            <div className={s.profileDescriprion}>
                <p>Full name: <b>{profile.fullName}</b></p>
                <img src={profile.photos?.large}/>
                <p>About me: <b>{profile.aboutMe}</b></p>
            </div>
        </div>
    );
}

export default ProfileInfo;