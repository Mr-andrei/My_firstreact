import {ActionsTypes,  stateType, } from "../../redux/store";
import "./profile.css"
import {addPostAc, chengePostAc} from "../../redux/postReduser";
import {Post} from "./post";
import {connect} from "react-redux";


/*
type postdataPropsType = {
    posts: Array<postsType>
    dispatch: (action: ActionsTypes) => void
    nextPost: string
}*/
/*
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
           />
        </div>
    )
}*/

let mapStateToProps = (state:stateType )=>{
    return {
        posts: state.postPagesData.postsdata,
        nextPost: state.postPagesData.nextPost
    }
}


let mapDispatchToProps = (dispatch:(action: ActionsTypes) => void) => {
    return {
        addPost: () => {

            dispatch(addPostAc())},

        changePost : (text:string) => {
            dispatch(chengePostAc(text))}

    }
}

export const PostContainer = connect (mapStateToProps, mapDispatchToProps) (Post)



