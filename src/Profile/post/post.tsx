import {postsType} from "../../redux/store";
import React, {ChangeEvent} from "react";
import "./profile.css"
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type PostDataPropsType = {
    posts: Array<postsType>
    addPost: () => void
    changePost: (text: string) => void
    nextPost: string
}

export const Post = (props: PostDataPropsType) => {

    let postData = props.posts
    // let newPostElement = React.createRef<HTMLTextAreaElement>()
    //
    // const addPost = () => {
    //     props.addPost()
    // }
    // const changePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let postText = e.currentTarget.value
    //     props.changePost(postText)
    // }

    const onSubmit = (value: AddPostFormType) => {
        props.changePost(value.Post)
        props.addPost()
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
            {/*<textarea className={"textArea"}*/}
            {/*          onChange={changePost}*/}
            {/*          ref={newPostElement}*/}
            {/*          value={props.nextPost}>*/}
            {/*</textarea>*/}
            {/*<button onClick={addPost}>Add post</button>*/}
            <ReduxPostForm
                onSubmit={onSubmit}
            />
            {postElement}
        </div>
    )
}


type AddPostFormType = {
    Post: string
}


const PostForm: React.FC<InjectedFormProps<AddPostFormType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Post"}
                    name={"Post"}
                    component={"input"}
                    type={"text"}/>
            </div>
            <button>add</button>
        </form>
    )
}

const ReduxPostForm = reduxForm<AddPostFormType>({
    form: "PostForm"
})(PostForm)


