import React from 'react';
import {ActionsTypes, stateType} from "../redux/store";
import {addMessegesAc, chengeMessgesTextAc} from "../redux/messagesReduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state:stateType )=>{
    return {
        dialog: state.dialogPages.dialogsData ,
        message:state.messagesPages.mesageData,
        nextMessage: state.messagesPages.nextMassege
    }
}


let mapDispatchToProps = (dispatch:(action: ActionsTypes) => void) => {
    return {
        addMessage: () => {
            dispatch(addMessegesAc())},

        changeMassage : (text:string) => {
            dispatch(chengeMessgesTextAc(text))}

    }
}

export const MessageContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs)














