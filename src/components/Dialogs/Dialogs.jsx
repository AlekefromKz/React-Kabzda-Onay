import React from 'react';
import s from './Dialogs.module.css';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { maxLengthValidator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/Form/FormControls';

const maxLength10 = maxLengthValidator(10);

const NewMessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'newMessageBody'}
                    placeholder={'Enter your message'}
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    );
};

const NewMessageReduxForm = reduxForm({ form: 'dialogsNewMessage' })(NewMessageForm);

const Dialogs = props => {
    const dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    const messageElements = props.dialogsPage.messages.map(m => <Message message={m.message} my={m.my} />);

    const addNewMessage = values => {
        props.addMessage(values.newMessageBody);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogElements}</div>
            <div className={s.messages}>
                {messageElements}
                <NewMessageReduxForm onSubmit={addNewMessage} />
            </div>
        </div>
    );
};

export default Dialogs;
