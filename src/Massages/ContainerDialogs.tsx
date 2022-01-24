import {dialogsDataType, messageDataType} from "../redux/store";
import {addMessegesAc, chengeMessgesTextAc} from "../redux/messagesReduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {withAuthRedirect} from "../hoc/whithAuthRedirect";
import {compose} from "redux";
import React from "react";
import {withRouter} from "react-router-dom";

type MSType = {
    dialog: Array<dialogsDataType>
    message: Array<messageDataType>
    nextMessage: string
}

let mapStateToProps = (state: RootStateType): MSType => {
    return {
        dialog: state.dialogPages.dialogsData,
        message: state.messagesPages.messageData,
        nextMessage: state.messagesPages.nextMessage,
    }
}

export default compose<React.ComponentType>(
    (connect(mapStateToProps, {
            addMessage: addMessegesAc,
            changeMassage: chengeMessgesTextAc
        })
    ),
    withRouter,
    withAuthRedirect)(Dialogs)











