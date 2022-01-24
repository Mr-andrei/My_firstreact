import React, {ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../redux/redux-store";
import {connect} from "react-redux";

type MSTPType = {
    isAuth: boolean
}
const mapStateToProps = (state: RootStateType): MSTPType => ({
    isAuth: state.auth.isAuth
})
export function withAuthRedirect <WraperComponnentProps> (Component: ComponentType<WraperComponnentProps>)  {

    function RedirectComponent(props: MSTPType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={"/Login"}/>
        return <Component {...restProps as WraperComponnentProps}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}
