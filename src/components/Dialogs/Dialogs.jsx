import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div>
            <NavLink to={path} className={s.dialog}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    let dialogs = [
        { id: 1, name: 'Almaz' },
        { id: 2, name: 'Ainur' },
        { id: 3, name: 'Aliko' },
        { id: 4, name: 'Qanat' },
        { id: 5, name: 'Dinara' },
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Yo' },
        { id: 3, message: 'Bro' },
        { id: 3, message: 'Bro' },
        { id: 3, message: 'Bro' },
        { id: 3, message: 'Bro' },
        { id: 3, message: 'Bro' },
        { id: 3, message: 'Bro' },
    ]

    let dialogElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messageElements = messages.map(m => <Message message={m.message} />)


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