import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import CloseFriends from "./CloseFriends/CloseFriends";

const Navbar = (props) => {
    return (
        <nav className={s.navbar}>
            <div className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
            <div className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}><NavLink to="/settings"
                                             activeClassName={s.active}>Settings</NavLink></div>

            {/*<CloseFriends state={state}/>*/}
        </nav>
    );
};

export default Navbar;