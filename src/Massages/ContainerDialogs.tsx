import {dialogsDataType, messageDataType} from "../redux/store";
import {addMessegesAc, chengeMessgesTextAc} from "../redux/messagesReduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../redux/redux-store";
import {withAuthRedirect} from "../hoc/whithAuthRedirect";

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

export const MessageContainer = withAuthRedirect(connect(mapStateToProps, {
        addMessage: addMessegesAc,
        changeMassage: chengeMessgesTextAc
    }
)(Dialogs))














