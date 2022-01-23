import React from "react";
import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/state";


const Dialogs = (props) => {
    let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messageElements = props.dialogsPage.messages.map(m => <Message message={m.message} my={m.my}/>)

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let updateNewMessage = (e) => {
        props.dispatch(updateNewMessageActionCreator(e.target.value));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea
                    onChange={updateNewMessage}
                    value={props.dialogsPage.newMessageText}
                />
                <button onClick={addMessage}>send message</button>
            </div>
        </div>
    );
}

export default Dialogs;