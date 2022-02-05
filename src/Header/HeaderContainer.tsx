import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {logAuthUserTC, logOutTC} from "../redux/auth-Reducer";
import {RootStateType} from "../redux/redux-store";

type PropsType = {
    setUserDataFromTC: () => void
    isAuth: boolean | null
    login: string | null
    logOut: () => void

}

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.setUserDataFromTC()
    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}
            logOut={this.props.logOut}
        />
    }

}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})


export default connect(mapStateToProps, {
    setUserDataFromTC: logAuthUserTC,
    logOut: logOutTC
})(HeaderContainer)