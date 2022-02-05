import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React, {ChangeEvent, useState} from "react";
import {maxLengthCreator, required} from "../validator/validator";
import {FormInputControl} from "../componets/formcontrol/FormInputControl";
import {connect} from "react-redux";
import {loginTC, logOutTC} from "../redux/auth-Reducer";
import {RootStateType} from "../redux/redux-store";
import {PersonType} from "../redux/usersReducer";
import {Redirect} from "react-router-dom";


type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
let maxLength = maxLengthCreator(50)
// const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
//
//     return (
//         <div>
//             <form onSubmit={props.handleSubmit}>
//                 <div>
//                     <Field
//                         placeholder={"Login"}
//                         name={"Login"}
//                         validate={[required, maxLength]}
//                         component={FormInputControl}
//                         type={"text"}/>
//                 </div>
//                 <div>
//                     <Field
//                         placeholder={"Password"}
//                         name={"Password"}
//                         validate={[required, maxLength]}
//                         component={FormInputControl}
//                         type={"text"}/>
//                 </div>
//                 <div>
//                     <Field
//                         name={"RememberMe"}
//                         component={"input"}
//                         type={"checkbox"}/>
//                 </div>
//                 <div>
//                     <button>
//                         login
//                     </button>
//                 </div>
//             </form>
//         </div>
//     )
//     const onSubmit = (formData: FormDataType) => {
//         console.log(formData)
//         props.login(formData.login, formData.password, formData.rememberMe)
//     }
// }
//
// const ReduxLoginForm = reduxForm<FormDataType>({
//     form: "Login"
// })(LoginForm)

type LoginPropsType = {
    isAuth: boolean
    login: (email: string, password: string, rememberMe: boolean) => void

}
const Login = (props: LoginPropsType) => {


    let [login, setLogin] = useState({
        login: "",
        password: "",
        rememberMe: false
    })

    const changeHandlerLog = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin({...login, login: e.currentTarget.value})
    }
    const changeHandlerPass = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin({...login, password: e.currentTarget.value})
    }
    const setDataLog = () => {
        props.login(login.login, login.password, login.rememberMe)
    }
    const changeHandlerChecked = () => {
        setLogin({...login, rememberMe: !login.rememberMe})
    }
    if(props.isAuth){
        return <Redirect to={'/profile'}/> }

    return (
        <div>
            <h3>LOGIN</h3>
            <div>
                <input onChange={changeHandlerLog} type="text"/>
                <input onChange={changeHandlerPass} type="text"/>
                <input onChange={changeHandlerChecked} type="checkbox" checked={login.rememberMe}/>
                <button onClick={setDataLog}>Log in</button>
            </div>

        </div>
    )
}
type MSTPType = {
    isAuth: boolean
}
const mapStateToProps = (state: RootStateType): MSTPType => {
    return {
        isAuth: state.auth.isAuth

    }
}

export default connect(mapStateToProps,
    {
        login: loginTC,

    })
(Login)