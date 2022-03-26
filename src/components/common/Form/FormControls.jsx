import React from "react";
import styles from "./FormControls.module.css";

export const Textarea = ({input, meta, ...props}) => {
    const isError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (isError ? styles.error : "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
            { isError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    const isError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (isError ? styles.error : "")}>
            <div>
                <input {...input} {...props} />
            </div>
            { isError && <span>{meta.error}</span>}
        </div>
    )
}