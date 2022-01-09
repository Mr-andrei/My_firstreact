import cl from './Profile.module.css'
import {PostContainer} from "./post/ContainerComponentPost";
import React from "react";
import {ProfileInfo} from "./ProfileInfo";


const Profile = () => {
    return (
        <div className={cl.profile}>
            <ProfileInfo/>
            <PostContainer/>
        </div>
    )
}

export default Profile