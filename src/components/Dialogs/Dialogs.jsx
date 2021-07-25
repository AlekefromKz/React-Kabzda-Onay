import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div><NavLink to="/dialogs/1" className={s.dialog + ' ' + s.active}>Aleke</NavLink></div>
                <div><NavLink to="/dialogs/2" className={s.dialog}>Almaz</NavLink></div>
                <div><NavLink to="/dialogs/3" className={s.dialog}>Almekendi</NavLink></div>
                <div><NavLink to="/dialogs/4" className={s.dialog}>Alllmaz</NavLink></div>
                <div><NavLink to="/dialogs/5" className={s.dialog}>Synoka</NavLink></div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>1</div>
                <div className={s.message}>2</div>
                <div className={s.message}>3</div>
            </div>
        </div>
    );
}

export default Dialogs;