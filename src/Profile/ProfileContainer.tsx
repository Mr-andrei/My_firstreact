import cl from './Profile.module.css'
import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileTC, getUserStatus, updateStatus} from "../redux/postReduser";
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
    updateStatus : (status: string) => void
}

// типизация визроут
type PathParamsType = {
    userId: string,
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {

        let userID = this.props.match.params.userId
        if(!userID) {
            userID = "21080"
        }


        this.props.getProfileTC(userID)
        this.props.getUserStatus(userID)


    }
    render() {

        return (
            <div className={cl.profile}>
                <Profile
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}

                />
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
        getUserStatus,
        updateStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

