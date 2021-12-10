

import React from "react";
import {UsersContainerType} from "./UsersContainer";
import axios from "axios";
import images from "./images/images.jpg"

/*

const Users = (props: UsersContainerType) => {


    if(props.users.length === 0 ){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
            props.setState(response.data.items)
        })
   }

    let dataUsers = props.users.map(m => {
        let btn = m.follow ? <button onClick={() => props.unFollow(m.id)}>Unfollow</button> :
            <button onClick={() => props.follow(m.id)}>Follow</button>
        return (
            <div key={m.id}>
                <img  src= {images} alt=""/>
                <h5>{m.name}</h5>
                <span>{m.status}</span>
                <div>{btn}  </div>
                <div>
                    <span>{"m.place.country"}</span>
                    <span>{"m.place.city"}</span>
                </div>
            </div>
        )
    })

    return (
        <div>
            {dataUsers}
        </div>
    )
}

export default Users*/
