import cl from './Profile.module.css'
import React from "react";
import {ProfileInfo} from "./ProfileInfo";
// import axios from "axios";
// import {connect} from "react-redux";
// import {setProfileAc} from "../redux/postReduser";
//
//
// class ProfileContainerCL extends React.Component {
//
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
//             .then(response => {
//             this.props.setStateProfile(response.data)
//
//         })
//     }
//
//     render () {
//        return (
//            <div className={cl.profile}>
//             <ProfileInfo/>
//         </div>)
//     }
// }
//
//
// const mapStateToProps = (state:number) => ({ a : 12})
//
// export default connect(mapStateToProps, setProfileAc) (ProfileContainerCL)