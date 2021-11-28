import { postsType} from "../../redux/store";
import React, {ChangeEvent} from "react";
import "./profile.css"



type postdataPropsType = {
    postdata: Array<postsType>
    addPost:() => void
    changePost:(text:string) => void
    nextPost:string
}


export const Post = (props: postdataPropsType) => {

    let postData = props.postdata
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost()
    }
    const changePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let postText = e.currentTarget.value
        props.changePost(postText)
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

