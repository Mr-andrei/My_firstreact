import React from "react";
import {UsersContainerType} from "./UsersContainer";
import axios from "axios";
import images from "./images/images.jpg"
import s from "./users.module.css";
import {PersonType} from "../redux/usersReducer";


type propsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    users: Array<PersonType>
    pageSize: number
    totalCount: number
    currentPage: number
    onsetPages: (current: number) => void
}


const Users = ({
                   follow,
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


    return (
        <div>
            <div>
                {page.map(m => {
                    return <span onClick={(e) => {
                        onsetPages(m)
                    }}
                                 className={currentPage === m ? s.count_list : ""}>
                         {m}
                     </span>
                })}

            </div>
            {

                users.map(m => <div>
                    <img src={m.photos.small !== null ? m.photos.small : images} alt=""/>
                    <h5>{m.name}</h5>
                    <span>{m.status}</span>
                    <div>{m.follow ? <button onClick={() => unFollow(m.id)}>Unfollow</button> :
                        <button onClick={() => follow(m.id)}>Follow</button>}  </div>
                    <div>
                        <span>{"m.place.country"}</span>
                        <span>{"m.place.city"}</span>
                    </div>

                </div>)
            }
        </div>

    )
}


export default Users
