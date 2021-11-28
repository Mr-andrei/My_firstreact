import {ActionsTypes, postsType} from "../../redux/store";
import React, {ChangeEvent} from "react";
import "./profile.css"
import {addPostAc, chengePostAc} from "../../redux/postReduser";


type postdataPropsType = {
    postdata: Array<postsType>
    dispatch: (action: ActionsTypes) => void
    nextPost: string
}


export const Post = (props: postdataPropsType) => {

    let postData = props.postdata
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch(addPostAc())
    }
    const changePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let postText = e.currentTarget.value
        props.dispatch(chengePostAc(postText))
    }


    const postElement = postData.map(f => {
            return (
                <div>
                    <span>{f.text}</span>
                    <span>{f.likecount}</span>
                </div>
            )
        }
    )

    return (
        <div>
            <textarea className={"textArea"}
                onChange={changePost}
                ref={newPostElement}
                value={props.nextPost}>
            </textarea>
            <button onClick={addPost}>Add post</button>

            {postElement}
        </div>
    )
}

