import {RootStateType} from "./redux-store";


export const getUsers = (state:RootStateType) => {
    return state.usersPages.users
}

export const getPageSize = (state:RootStateType) => {
    return state.usersPages.pageSize
}

export const getTotalUsersCount = (state:RootStateType) => {
    return state.usersPages.totalCount
}
export const getCurrentPage = (state:RootStateType) => {
    return state.usersPages.currentPage
}
export const getPreloader = (state:RootStateType) => {
    return state.usersPages.preloader
}
export const getIfFollowing = (state:RootStateType) => {
    return state.usersPages.ifFollowing
}
