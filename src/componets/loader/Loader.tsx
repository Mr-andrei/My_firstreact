import React from "react";
import s from "./loader.module.css"


export const Loader = () => {
    return (
        <div className={s.lds_ring}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}