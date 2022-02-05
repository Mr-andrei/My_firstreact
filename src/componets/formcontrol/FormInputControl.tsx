import React from "react";
import s from './formInput.module.css'


export const FormInputControl = ({input,meta,...props}:any) => {
    let error = meta.touched && meta.error
  return(
      <div  >
          <div className={s.defaultInput +" "+ (error ? s.errorInput : "")}>
          <input
              {...input} {...props} />
          </div>
          {error && <span style = {{color:"red"}}>meta.error</span>}
      </div>
  )
}