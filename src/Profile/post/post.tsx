import {addPostType, changePostType, postsType} from "../../redux/state";
import React, {ChangeEvent} from "react";
import {type} from "os";


type postdataPropsType = {
    postdata: Array<postsType>
    /*addPost: () => void
    changeTextArea: (text:string) => void*/
    dispatch: (action: addPostType | changePostType) => void
}


export const Post = (props: postdataPropsType) => {

    let postData = props.postdata
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
       props.dispatch({type:"ADD-POST"} )

    }
    const changePost = (e:ChangeEvent<HTMLTextAreaElement>) => {
       props.dispatch({type: "CHANGE-TEXT-AREA", text: e.currentTarget.value})
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

