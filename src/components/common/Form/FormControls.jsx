import React from 'react';
import styles from './FormControls.module.css';
import {Field} from 'redux-form';

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
    const isError = touched && error;
    return (
        <div className={styles.formControl + ' ' + (isError ? styles.error : '')}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {isError && <span>{error}</span>}
        </div>
    );
};

export const Input = ({ input, meta, ...props }) => {
    const isError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' ' + (isError ? styles.error : '')}>
            <div>
                <input {...input} {...props} />
            </div>
            {isError && <span>{meta.error}</span>}
        </div>
    );
};

export const createField = (placeholder, name, component, validate, props = {}, text) => (
    <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validate} {...props} /> {text}
    </div>
);
