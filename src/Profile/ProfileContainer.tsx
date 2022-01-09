import cl from './Profile.module.css'
import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import { setUsersProfile} from "../redux/postReduser";
import {RootStateType} from "../redux/redux-store";


type ProfileContainerType = {
    setUsersProfile:(profile:any)=> void
    profile: any
}


class ProfileContainer extends React.Component<ProfileContainerType>{

        componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUsersProfile(response.data)
        });
    }


    render(){
    return (
        <div className={cl.profile}>
            <Profile  profile = {this.props.profile}/>
        </div>
    )}
}

type  mapStateToPropsType = {
    profile: any
}

const mapStateToProps = (state:RootStateType):mapStateToPropsType => ({
   profile: state.postPagesData.profile
})

export default connect(mapStateToProps, {
    setUsersProfile
}) (ProfileContainer)