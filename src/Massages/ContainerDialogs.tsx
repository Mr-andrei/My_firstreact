import {dialogsDataType, messageDataType} from "../redux/store";
import {addMessegesAc, chengeMessgesTextAc} from "../redux/messagesReduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";


type MSType = {

    dialog: Array<dialogsDataType>
    message: Array<messageDataType>
    nextMessage: string
    isAuth: boolean
}


let mapStateToProps = (state: RootStateType): MSType => {
    return {
        dialog: state.dialogPages.dialogsData,
        message: state.messagesPages.messageData,
        nextMessage: state.messagesPages.nextMessage,
        isAuth: state.auth.isAuth
    }
}

export const MessageContainer = connect(mapStateToProps, {
        addMessage: addMessegesAc,
        changeMassage: chengeMessgesTextAc
    }
)(Dialogs)














