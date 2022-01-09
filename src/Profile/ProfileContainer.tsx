import cl from './Profile.module.css'
import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import { setUsersProfile} from "../redux/postReduser";
import {RootStateType} from "../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";


type ProfileContainerType =  mapStateToPropsType & mapDispatchToProps

type  mapStateToPropsType = {
    profile: any
}
type mapDispatchToProps = {
    setUsersProfile:(profile:any)=> void
}

// типизация визроут
type PathParamsType = {
    userId: string,
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType



class ProfileContainer extends React.Component<PropsType>{

        componentDidMount() {
            let userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/ `+ userId)
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

const mapStateToProps = (state:RootStateType):mapStateToPropsType => ({
   profile: state.postPagesData.profile
})

 let WithRouterContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUsersProfile
}) (WithRouterContainerComponent)