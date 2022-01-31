import cl from './Profile.module.css'
import {PostContainer} from "./post/ContainerComponentPost";
import React from "react";
import {ProfileInfo} from "./ProfileInfo";


type ProfilePropsType = {
    profile: any
    status:string
    updateStatus : (status: string) => void
}

const ProfileL = (props:ProfilePropsType) => {

    return (
        <div className={cl.profile}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <PostContainer/>
        </div>
    )
}

export default ProfileL