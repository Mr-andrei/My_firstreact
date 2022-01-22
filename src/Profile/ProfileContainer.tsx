import cl from './Profile.module.css'
import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC} from "../redux/postReduser";
import {RootStateType} from "../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type ProfileContainerType = mapStateToPropsType & mapDispatchToProps

type  mapStateToPropsType = {
    profile: any
    isAuth: boolean
}
type mapDispatchToProps = {
    getProfileTC: (userId: string) => void
}

// типизация визроут
type PathParamsType = {
    userId: string,
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType


class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getProfileTC(this.props.match.params.userId)
    }


    render() {
        if (!this.props.isAuth ) return <Redirect to={"/Login"}/>
        return (
            <div className={cl.profile}>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    profile: state.postPagesData.profile,
    isAuth: state.auth.isAuth
})

let WithRouterContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    getProfileTC
})(WithRouterContainerComponent)