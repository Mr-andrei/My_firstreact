import {
    currentPagePlusAC,followTC, getUsersThunkCreator, ifFollowingSetAC,
    PersonType, unFollowTC
} from "../redux/usersReducer";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import React from "react";
import Users from "./Users";
import {
    getCurrentPage,
    getIfFollowing,
    getPageSize,
    getPreloader,
    getTotalUsersCount,
    getUsers
} from "../redux/users-selectors";


type UsersPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    users: Array<PersonType>
    pageSize: number
    totalCount: number
    currentPage: number
    currentPagePlus: (current: number) => void
    setIsFollowing: (isFollow: boolean, userId: number) => void
    isFollow: Array<number>
    preloader: boolean
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersC extends React.Component<UsersPropsType> {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onsetPages = (current: number) => {
        this.props.getUsers(current, this.props.pageSize)
    }

    render() {
        return (
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalCount={this.props.totalCount}
                currentPage={this.props.currentPage}
                onsetPages={this.onsetPages}
                preloader={this.props.preloader}
                isFollow={this.props.isFollow}
                follow={this.props.follow}
                unFollow={this.props.unFollow}

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
    isFollow: Array<number>
}
export type MDTPType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    currentPagePlus: (current: number) => void
    setIsFollowing: (isFollow: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void

}

export type UsersContainerType = MSTPType & MDTPType

const mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        preloader: getPreloader(state),
        isFollow: getIfFollowing(state),
    }
}
export default connect(mapStateToProps,
    {
        follow: followTC,
        unFollow: unFollowTC,
        currentPagePlus: currentPagePlusAC,
        setIsFollowing: ifFollowingSetAC,
        getUsers: getUsersThunkCreator,

    }
)(UsersC)