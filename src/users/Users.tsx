import { PersonType} from "../redux/usersReducer";
import React from "react";



type UsersPropsType  = {
    users:Array<PersonType>
    follow: (id:number) => void
    unFollow: (id:number) => void

}



const Users = ({users, follow, unFollow}:UsersPropsType) => {
    return (
        users && users.map( m => <div key={m.id}>{m.firstName}</div>)
    )
}

export default Users