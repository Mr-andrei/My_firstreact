import React from "react";
import images from "./images/images.jpg"
import {PersonType, SetTotalUserCountAC} from "../redux/usersReducer";
import axios from "axios";
import s from './users.module.css'

type propsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    setState: (state: Array<PersonType>) => void
    users: Array<PersonType>
    pageSize: number
    totalCount: number
    currentPage: number
    currentPagePlus : (current:number)=> void
    SetTotalUserCount: (count:number) => void
}


class Users extends React.Component<propsType> {


    componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setState(response.data.items)
                this.props.SetTotalUserCount(response.data.totalCount)
            })
    }

    onsetPages = (current:number) => {
        this.props.currentPagePlus(current)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${current}&count=${this.props.pageSize}`).then(response => {
                this.props.setState(response.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize)
        let page = []
        for (let i = 1; i <= pagesCount; i++) {
            page.push(i)
        }

        return (
            <div>
                <div>
                    {page.map(m => {
                        return <span onClick={(e)=> {this.onsetPages(m)}}
                                     className={this.props.currentPage === m ? s.count_list : ""}>
                         {m}
                     </span>
                    })}

                </div>
                {

                    this.props.users.map(m => <div>
                        <img src={m.photos.small !== null ? m.photos.small : images } alt=""/>
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
