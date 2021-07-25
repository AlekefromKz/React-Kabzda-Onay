import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://www.tehnopol.ee/wp-content/uploads/2021/01/Tehnopol_logo_RGB.png"></img>
        </header>
    );
}

export default Header;