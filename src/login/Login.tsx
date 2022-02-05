import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {maxLengthCreator, required} from "../validator/validator";
import {FormInputControl} from "../componets/formcontrol/FormInputControl";


type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}
let maxLength = maxLengthCreator(10)
const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        placeholder={"Login"}
                        name={"Login"}
                        validate={[ required,maxLength]}
                        component= {FormInputControl}
                        type={"text"}/>
                </div>
                <div>
                    <Field
                        placeholder={"Password"}
                        name={"Password"}
                        validate={[ required,maxLength]}
                        component= {FormInputControl}
                        type={"password"}/>
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