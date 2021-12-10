import {followAC, PersonType, setUserUAC, unFollowAC} from "../redux/usersReducer";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import Users from "./UsersС";


type MSTPType = {
    users: Array<PersonType>
}

export type MDTPType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setState:(state:Array<PersonType>) => void
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
        },
        setState: (state:Array<PersonType>) => {
            dispatch(setUserUAC (state))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)