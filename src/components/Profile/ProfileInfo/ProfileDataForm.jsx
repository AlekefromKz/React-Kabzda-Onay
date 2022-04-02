import s from './ProfileInfo.module.css';
import React from 'react';
import {createField, Input, Textarea} from '../../common/Form/FormControls';
import {reduxForm} from 'redux-form';
import style from '../../common/Form/FormControls.module.css';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <button>Save Profile</button>
                    {error && <div className={style.formControlForm}>{error}</div>}
                </div>
                <p>
                    <b>Full name:</b> {createField('Full name', 'fullName', Input, [])}
                </p>

                <div>
                    <b>About me:</b> {createField('About me', 'aboutMe', Input, [])}
                </div>

                <div>
                    {createField(
                        'Looking for a job',
                        'lookingForAJob',
                        Input,
                        [],
                        { type: 'checkbox' },
                        'Looking for a job',
                    )}
                </div>

                <div>
                    <p>Professional skills</p>{' '}
                    {createField('Professional skills', 'lookingForAJobDescription', Textarea, [])}
                </div>

                <div className={s.contacts}>
                    <b>Contacts:</b>{' '}
                    {Object.keys(profile.contacts).map(key => {
                        return (
                            <div key={key}>
                                {key}: {createField(key, 'contacts.' + key, Input, [])}
                            </div>
                        );
                    })}
                </div>
            </form>
        </div>
    );
};

export default reduxForm({ form: 'profile-edit' })(ProfileDataForm);
