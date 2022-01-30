import cl from './Profile.module.css'
import {PostContainer} from "./post/ContainerComponentPost";
import React from "react";
import {ProfileInfo} from "./ProfileInfo";


type ProfilePropsType = {
    profile: any
}

const ProfileL = (props:ProfilePropsType) => {

    return (
        <div className={cl.profile}>
            <ProfileInfo profile={props.profile}/>
            <PostContainer/>
        </div>
    )
}

export default ProfileL