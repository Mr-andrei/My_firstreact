import {ActionsTypes, postsType} from "../../redux/store";
import "./profile.css"
import {addPostAc, changePostAc} from "../../redux/postReduser";
import {Post} from "./post";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";



type MSType ={
    posts:Array<postsType>
    nextPost:string
}

let mapStateToProps = (state:RootStateType ):MSType=>{
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
            dispatch(changePostAc(text))}

    }
}

export const PostContainer = connect (mapStateToProps, mapDispatchToProps) (Post)



