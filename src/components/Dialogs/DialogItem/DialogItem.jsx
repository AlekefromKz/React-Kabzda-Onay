import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div>
            <img className={s.dialogAvatar} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4j2gcKWzgJbtP4THqnDRJqr2fHO8jgLoM4Q&usqp=CAU'></img>
            <NavLink to={path} className={s.dialog}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;