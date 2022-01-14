import Header from "./Header";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../redux/auth-Reducer";
import {RootStateType} from "../redux/redux-store";

type PropsType = {
    setUserData: (id:number,email:string,login:string )=> void
    isAuth:boolean
    login: string
}

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0){
                    let {id, email,login } = response.data.data
                    this.props.setUserData(id, email,login )
                }
            });
        console.log("push")
    }

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
        />
    }

}
const mapStateToProps = (state:RootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})



export default connect(mapStateToProps, {
    setUserData
}) (HeaderContainer)