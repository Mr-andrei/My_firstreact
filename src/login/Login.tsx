import {Field, reduxForm} from "redux-form";

const LoginForm = (props:any) => {

    return (
        <div>
            <form onSubmit={props.hande}>
                <div>
                    <Field
                        placeholder={"Login"}
                        name="Login"
                        component="input"
                        type="text"/>
                </div>
                <div>
                    <Field
                        placeholder={"Password"}
                        name="Password"
                        component="input"
                        type="text"/>
                </div>
                <div>
                    <input type="checkbox"/>
                </div>
                <div>
                    <button>
                        login
                    </button>
                </div>
            </form>
        </div>
    )
}

const ReduxLoginForm = reduxForm({
    form: "Login"
})(LoginForm)

const Login = () => {
    return (
        <div>
            <h3>LOGIN</h3>
            <ReduxLoginForm/>
        </div>
    )
}

export default Login