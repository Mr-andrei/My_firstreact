import {ActionsTypes, postsType, storeType} from "../../redux/store";
import React, {ChangeEvent} from "react";
import "./profile.css"
import {addPostAc, chengePostAc} from "../../redux/postReduser";
import {Post} from "./post";


type postdataPropsType = {
    posts: Array<postsType>
    dispatch: (action: ActionsTypes) => void
    nextPost: string
}

export const ContainerComponentPost = (props:postdataPropsType ) => {

    const addPost = () => {
        props.dispatch(addPostAc())
    }
    const changePost = (text:string) =>  {
        props.dispatch(chengePostAc(text))}




    return (
        <div>
           <Post postdata={props.posts}
                 addPost={addPost}
                 changePost ={changePost}
                 nextPost={props.nextPost}
           />
        </div>
    )
}

