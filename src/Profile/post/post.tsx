import { postsType} from "../../redux/store";
import React, {ChangeEvent} from "react";
import "./profile.css"

type PostDataPropsType = {
    posts: Array<postsType>
    addPost:() => void
    changePost:(text:string) => void
    nextPost:string
}

export const Post = (props:PostDataPropsType) => {

    let postData = props.posts
    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost()
        console.log("123")
    }
    const changePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let postText = e.currentTarget.value
        props.changePost(postText)
    }

    const postElement = postData.map(f => {
            return (
                <div key={f.id}>
                    <span>{f.text}</span>
                    <span>{f.likeCount}</span>
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

