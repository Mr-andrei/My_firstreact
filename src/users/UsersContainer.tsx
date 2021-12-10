import {
    currentPagePlusAC,
    followAC,
    PersonType,
    SetTotalUserCountAC,
    setUserUAC,
    unFollowAC
} from "../redux/usersReducer";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {Dispatch} from "redux";
import Users from "./UsersС";


type MSTPType = {
    users: Array<PersonType>
    pageSize: number
    totalCount:number
    currentPage: number
}

export type MDTPType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setState:(state:Array<PersonType>) => void
    currentPagePlus : (current:number)=> void
    SetTotalUserCount : (count:number) => void

}

export type UsersContainerType = MSTPType & MDTPType

const mapStateToProps = (state: RootStateType):MSTPType => {
    return {
        users: state.usersPages.users,
        pageSize: state.usersPages.pageSize,
        totalCount: state.usersPages.totalCount,
        currentPage: state.usersPages.currentPage
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
        },
        currentPagePlus : (current:number)=> {
            dispatch(currentPagePlusAC(current))
        },
        SetTotalUserCount: (count :number) => {
            dispatch(SetTotalUserCountAC(count))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)