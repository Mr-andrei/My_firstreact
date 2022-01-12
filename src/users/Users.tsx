import React from "react";
import images from "./images/images.jpg"
import s from "./users.module.css";
import {PersonType} from "../redux/usersReducer";
import {Loader} from "../componets/loader/Loader";
import { NavLink } from 'react-router-dom'
import axios from "axios";


type propsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    users: Array<PersonType>
    pageSize: number
    totalCount: number
    currentPage: number
    onsetPages: (current: number) => void
    preloader: boolean

}


const Users = ({
                   follow,
                   preloader,
                   unFollow,
                   users,
                   pageSize,
                   totalCount,
                   currentPage,
                   onsetPages
               }: propsType) => {


    let pagesCount = Math.ceil(totalCount / pageSize)
    let page = []
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }
    let mainUsers = users.map(m => <div>
        <NavLink to={"./profile/" + m.id}>
        <img src={m.photos.small != null  ? m.photos.small : images} alt=""/>
        </NavLink>
        <h5>{m.name}</h5>
        <span>{m.status}</span>
        <div>{m.follow ?
            <button onClick={() =>{
                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}` , {
                    withCredentials:true,
                    headers: {
                        "API-KEY":"d832e30a-b023-4ff8-b5a8-9ef96cfd6279"
                    }})
                    .then(response => {
                        if(response.data.resultCode === 0){
                            unFollow(m.id)
                        }
                })}}
            >Unfollow</button>
            :
            <button onClick={() =>{
                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${m.id}` , {}, {
                    withCredentials:true,
                    headers: {
                        "API-KEY":"d832e30a-b023-4ff8-b5a8-9ef96cfd6279"
                    }
                })
                    .then(response => {
                        if(response.data.resultCode === 0){
                           follow(m.id)
                        }
                    })}}>Follow</button>}  </div>
        <div>
            <span>{"m.place.country"}</span>
            <span>{"m.place.city"}</span>
        </div>
    </div>)
    let pages = page.map(m => {
        return <span onClick={(e) => {onsetPages(m)}}
                     className={currentPage === m ? s.count_list : s.normal_numb}>
                         {m}
                     </span>})

    let loaderUsers = preloader ? <Loader/> : mainUsers

    return (

        <div>
            <div>{pages}</div>
            {loaderUsers}
        </div>

    )
}


export default Users
