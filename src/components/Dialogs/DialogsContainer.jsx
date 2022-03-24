import Dialogs from "./Dialogs";
import {addMessage, updateNewMessage} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}

const DialogsContainer = connect(mapStateToProps, {addMessage, updateNewMessage})(Dialogs)

export default DialogsContainer;