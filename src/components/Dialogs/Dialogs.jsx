import React from "react";
import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {
    const dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    const messageElements = props.dialogsPage.messages.map(m => <Message message={m.message} my={m.my}/>)

    const addMessage = () => {
        props.addMessage();
    }

    const updateNewMessage = (e) => {
        props.updateNewMessage(e.target.value);
    }

    if (!props.isAuth) return <Redirect to="/login"/>

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