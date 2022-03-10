import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    const updateNewMessage = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    }

    return <Dialogs
        addMessage={addMessage}
        updateNewMessage={updateNewMessage}
        dialogsPage={state.dialogsPage}
    />
}

export default DialogsContainer;