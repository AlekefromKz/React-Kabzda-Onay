import React from "react";
import s from "./CloseFriend.module.css";

const CloseFriend = (props) => {
    return (
        <div>
            <h4>{props.name}</h4>
            <img className={s.dialogAvatar} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4j2gcKWzgJbtP4THqnDRJqr2fHO8jgLoM4Q&usqp=CAU'></img>
        </div>
    );
};

export default CloseFriend;