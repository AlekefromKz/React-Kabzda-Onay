import React from "react";
import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messageElements = props.dialogsPage.messages.map(m => <Message message={m.message} my={m.my}/>)

    let messageTextRef = React.createRef();

    let sendMessage = () => {
        props.addMessage();
    }

    let handleOnChange = () => {
        props.updateNewMessage(messageTextRef.current.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <textarea
                    ref={messageTextRef}
                    onChange={handleOnChange}
                    value={props.dialogsPage.newMessageText}
                />
                <button onClick={sendMessage}>send message</button>
            </div>
        </div>
    );
}

export default Dialogs;