import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";


type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}

const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        placeholder={"Login"}
                        name={"Login"}
                        component={"input"}
                        type={"text"}/>
                </div>
                <div>
                    <Field
                        placeholder={"Password"}
                        name={"Password"}
                        component={"input"}
                        type={"text"}/>
                </div>
                <div>
                    <Field
                        name={"RememberMe"}
                        component={"input"}
                        type={"checkbox"}/>
                </div>
                <div>
                    <button  >
                        login
                    </button>
                </div>
            </form>
        </div>
    )
}

const ReduxLoginForm = reduxForm<FormDataType>({
    form: "Login"
})(LoginForm)

const Login = () => {

    const onSubmit = (formData:FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h3>LOGIN</h3>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login