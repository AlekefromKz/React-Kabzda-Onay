import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    const addMessageCallback = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    const updateNewMessageCallback = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text));
    }

    return <Dialogs
        addMessageCallback={addMessageCallback}
        updateNewMessageCallback={updateNewMessageCallback}
        dialogsPage={state.dialogsPage}
    />
}

export default DialogsContainer;