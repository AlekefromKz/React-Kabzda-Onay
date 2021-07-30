import React from "react";
import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messageElements = props.messages.map(m => <Message message={m.message} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;