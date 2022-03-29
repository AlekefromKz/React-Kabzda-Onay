import React from 'react';
import s from './../Dialogs.module.css';

const Message = props => {
        let ownerClassName = '';
    if (props.my) {
        ownerClassName = s.myMessage;
    } else {
        ownerClassName = s.friendMessage;
    }
    return <p className={`${s.message} ${ownerClassName}`}>{props.message}</p>;
};

export default Message;
