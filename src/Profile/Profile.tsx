import cl from './Profile.module.css'
import {Post} from "./post/post";
import {ActionsTypes, postsType} from "../redux/store";
import {ContainerComponentPost} from "./post/ContainerComponentPost";
import React from "react";


type postsPropsType = {
    posts: Array<postsType>
    dispatch: (action: ActionsTypes) => void
    nextPost:string
}

const Profile = (props: postsPropsType) => {
    return (
        <div className={cl.profile}>
            <img className={cl.profile_img}
                 src="data:image/jpeg;base64,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"
                 alt=""/>
            <div className={cl.about_me}>
                <img className={cl.img_about}
                     src="data:image/jpeg;base64,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"
                     alt=""/>
                <ul>
                    <li> Andrei Chaus</li>
                    <li> Date of birth: 7 november</li>
                    <li>City : Gomel</li>
                    <li>Educatin:Gstu</li>
                </ul>
            </div>
            <ContainerComponentPost posts={props.posts}
                                    dispatch={props.dispatch}
                                    nextPost={props.nextPost}/>
        </div>
    )
}

export default Profile