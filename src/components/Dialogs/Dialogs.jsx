import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Almaz" id="1"/>
                <DialogItem name="Ainur" id="2"/>
                <DialogItem name="Aliko" id="3"/>
                <DialogItem name="Qanat" id="4"/>
                <DialogItem name="Dinara" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi" />
                <Message message="Yo" />
                <Message message="Bro" />
            </div>
        </div>
    );
}

export default Dialogs;