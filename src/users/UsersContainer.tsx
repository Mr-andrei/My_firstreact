import {followAC, FollowACType, InitialStateType, PersonType, unFollowAC, unFollowACType} from "../redux/usersReducer";
import {connect} from "react-redux";

import Users from "./Users";
export type stateUsersType = {
    users: Array<PersonType>
}

const mapStateToProps = (state: stateUsersType) => {
    return {
        users: state.users

    }
}

const mapDispatchToProps = (dispatch: (action: FollowACType | unFollowACType) => void) => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        unFollow: (id: number) => {
            dispatch(unFollowAC(id))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)