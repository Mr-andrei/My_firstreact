import {RootStateType} from "./redux-store";
import {createSelector} from "reselect";


export const getUsersSelectors = (state:RootStateType) => {
    return state.usersPages.users
}

export const getUsers =   createSelector(getUsersSelectors, (users) => {
   return  users.filter(f => true)
})

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
