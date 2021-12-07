import {followAC, PersonType, unFollowAC} from "../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import {RootStateType} from "../redux/redux-store";
import {Dispatch} from "redux";


type MSTPType = {
    users: Array<PersonType>
}

type MDTPType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
}

export type UsersContainerType = MSTPType & MDTPType

const mapStateToProps = (state: RootStateType):MSTPType => {
    return {
        users: state.usersPages.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MDTPType => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        unFollow: (id: number) => {
            dispatch(unFollowAC(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)