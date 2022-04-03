import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = props => {
    return (
        <header className={s.header}>
            <img alt={''} src="https://www.tehnopol.ee/wp-content/uploads/2021/01/Tehnopol_logo_RGB.png"></img>
            <div className={s.loginBlock}>
                {props.isAuth ? (
                    <div>
                        {props.login} - <button onClick={props.logout}>Log out</button>
                    </div>
                ) : (
                    <NavLink to={'/login'}>Login</NavLink>
                )}
            </div>
        </header>
    );
};

export default Header;
