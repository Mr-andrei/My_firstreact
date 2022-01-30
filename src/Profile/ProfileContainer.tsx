import cl from './Profile.module.css'
import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC, getUserStatus} from "../redux/postReduser";
import {RootStateType} from "../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/whithAuthRedirect";
import {compose} from "redux";


type ProfileContainerType = mapStateToPropsType & mapDispatchToProps

type  mapStateToPropsType = {
    profile: any
    status:string
}

type mapDispatchToProps = {
    getProfileTC: (userId: string) => void
    getUserStatus: (userId: string) => void
}

// типизация визроут
type PathParamsType = {
    userId: string,
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getProfileTC(this.props.match.params.userId)
        this.props.getUserStatus(this.props.match.params.userId)

    }
    render() {

        return (
            <div className={cl.profile}>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: RootStateType): mapStateToPropsType => ({
    profile: state.postPagesData.profile,
    status: state.postPagesData.status
})

export default  compose<React.ComponentType>(
    connect(mapStateToProps, {
        getProfileTC,
        getUserStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

