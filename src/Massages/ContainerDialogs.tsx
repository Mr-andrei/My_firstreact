import {ActionsTypes, dialogsDataType, messageDataType, stateType} from "../redux/store";
import {addMessegesAc, chengeMessgesTextAc} from "../redux/messagesReduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";


type MSType = {

    dialog :Array<dialogsDataType>
    message:Array<messageDataType>
    nextMessage: string
}


let mapStateToProps = (state:RootStateType ):MSType =>{
    return {
        dialog: state.dialogPages.dialogsData ,
        message:state.messagesPages.messageData,
        nextMessage: state.messagesPages.nextMessage
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














