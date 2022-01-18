import {
    currentPagePlusAC,
    followAC, ifFollowingSetAC,
    PersonType, preloadertAC,
    SetTotalUserCountAC,
    setUserUAC,
    unFollowAC
} from "../redux/usersReducer";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import React from "react";
import Users from "./Users";
import {userApi} from "../api/api";


type UsersPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setState: (state: Array<PersonType>) => void
    users: Array<PersonType>
    pageSize: number
    totalCount: number
    currentPage: number
    currentPagePlus: (current: number) => void
    SetTotalUserCount: (count: number) => void
    setIsFollowing:  (isFollow:boolean,userId:number) => void
    isFollow: Array<number>
    setLoader: (loading: boolean) => void
    preloader: boolean
}

class UsersC extends React.Component<UsersPropsType> {


    componentDidMount() {
        this.props.setLoader(true)
        userApi.getUsers(this.props.currentPage,this.props.pageSize)
            .then(data => {
            this.props.setLoader(false)
            this.props.setState(data.items)
            this.props.SetTotalUserCount(data.totalCount)
        })
    }

    onsetPages = (current: number) => {
        this.props.setLoader(true)
        this.props.currentPagePlus(current)
        userApi.getUsers(current,this.props.pageSize).then(data => {
            this.props.setLoader(false)
            this.props.setState(data.items)
        })
    }

    render() {
        return (
            <Users
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalCount={this.props.totalCount}
                currentPage={this.props.currentPage}
                onsetPages={this.onsetPages}
                preloader={this.props.preloader}
                setIsFollowing={this.props.setIsFollowing}
                isFollow={this.props.isFollow}

            />
        )
    }

}


type MSTPType = {
    users: Array<PersonType>
    pageSize: number
    totalCount: number
    currentPage: number
    preloader: boolean
    isFollow:Array<number>
}
export type MDTPType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setState: (state: Array<PersonType>) => void
    currentPagePlus: (current: number) => void
    SetTotalUserCount: (count: number) => void
    setLoader: (loading: boolean) => void
    setIsFollowing:  (isFollow:boolean,userId:number) => void

}

export type UsersContainerType = MSTPType & MDTPType

const mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        users: state.usersPages.users,
        pageSize: state.usersPages.pageSize,
        totalCount: state.usersPages.totalCount,
        currentPage: state.usersPages.currentPage,
        preloader: state.usersPages.preloader,
        isFollow:state.usersPages.ifFollowing,
    }
}
export default connect(mapStateToProps,
    {
        follow: followAC,
        unFollow: unFollowAC,
        setState: setUserUAC,
        currentPagePlus: currentPagePlusAC,
        SetTotalUserCount: SetTotalUserCountAC,
        setLoader: preloadertAC,
        setIsFollowing: ifFollowingSetAC,


    }
)(UsersC)