import {postsType, state, stateType} from "../../redux/state";
import React, {ChangeEvent, ChangeEventHandler} from "react";


type postdataPropsType = {
    postdata: Array<postsType>
    addPost: () => void
    changeTextArea: (text:string) => void
}


export const Post = (props: postdataPropsType) => {

    let postData = props.postdata
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
       props.addPost()
        props.changeTextArea("")
    }
    const changePost = (e:ChangeEvent<HTMLTextAreaElement>) => {
       props.changeTextArea( e.currentTarget.value)
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
            <textarea
               onChange={changePost}
                ref={newPostElement}></textarea>
            <button onClick={addPost}>Add post</button>

            {postElement}
        </div>
    )
}

