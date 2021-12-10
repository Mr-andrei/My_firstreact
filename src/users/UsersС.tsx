import React from "react";

import images from "./images/images.jpg"
import {PersonType} from "../redux/usersReducer";
import axios from "axios";

type propsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setState:(state:Array<PersonType>) => void
    users: Array<PersonType>
}



class Users extends React.Component<propsType> {

    constructor(props:propsType) {
        super(props);
        if(this.props.users.length === 0  ){
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
                this.props.setState(response.data.items)
            })
        }
    }


 render(){
     return(
         <div>
             {
                 this.props.users.map(m => <div>
                     <img src={images} alt=""/>
                     <h5>{m.name}</h5>
                     <span>{m.status}</span>
                     <div>{m.follow ? <button onClick={() => this.props.unFollow(m.id)}>Unfollow</button> :
                         <button onClick={() => this.props.follow(m.id)}>Follow</button>}  </div>
                     <div>
                         <span>{"m.place.country"}</span>
                         <span>{"m.place.city"}</span>
                     </div>

                 </div>)
             }
         </div>

     )
 }

}

export default Users

/*if(this.props.users.length === 0){
        return axios.get("https://social-network.samuraijs.com/api/1.0/users").then( response => {
            this.props.setState(response.data.items)
        })
   }




    return (
        <div>
            {dataUsers}
        </div>
    )*/
/*

constructor(props:MDTPType){
    super(props)
}*/

/*
    .map(m ={
<div key={m.id}>
    <img  src= {images} alt=""/>
    <h5>{m.name}</h5>
    <span>{m.status}</span>
    <div>{  m.follow ? <button onClick={() => this.props.unFollow(m.id)}>Unfollow</button> :
        <button onClick={() => this.props.follow(m.id)}>Follow</button>}  </div>
    <div>
        <span>{"m.place.country"}</span>
        <span>{"m.place.city"}</span>
    </div>
</div>}
*/
