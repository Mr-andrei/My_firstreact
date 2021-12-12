import React from "react";
import {PersonType} from "../redux/usersReducer";
import axios from "axios";
import Users from "./Users";

/*
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
}


class UsersC extends React.Component<UsersPropsType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setState(response.data.items)
            this.props.SetTotalUserCount(response.data.totalCount)
        })
    }

    onsetPages = (current: number) => {
        this.props.currentPagePlus(current)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${current}&count=${this.props.pageSize}`).then(response => {
            this.props.setState(response.data.items)
        })
    }

    render() {
      return   <Users
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            users={this.props.users}
            pageSize={this.props.pageSize}
            totalCount={this.props.totalCount}
            currentPage={this.props.currentPage}
            onsetPages={this.onsetPages}
            />

    }

}
*/

/*export default UsersC*/
