import React from "react";
import {UsersContainerType} from "./UsersContainer";


const Users = (props: UsersContainerType) => {



    let dataUsers = props.users.map(m => {
        let btn = m.follow ? <button onClick={()=> props.unFollow(m.id)}>Unfollow</button>:  <button onClick={()=> props.follow(m.id)}>Follow</button>
        return(
            <div key={m.id}>
                <h5>{m.firstName}</h5>
                <span>{m.status}</span>
                <div>{btn}  </div>
                <div>
                    <span>{m.place.country}</span>
                    <span>{m.place.city}</span>
                </div>
            </div>
        ) })

    return (
        <div>
            {dataUsers}
        </div>
    )
}

export default Users