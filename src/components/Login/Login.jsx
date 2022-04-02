import React from 'react';
import {reduxForm} from 'redux-form';
import {createField, Input} from '../common/Form/FormControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import style from './../common/Form/FormControls.module.css';

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', Input, [required])}
            {createField('Password', 'password', Input, [required], { type: 'password' })}
            {createField(null, 'rememberMe', Input, [], { type: 'checkbox' }, 'Remember me')}
            {error && <div className={style.formControlForm}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = ({ login, isAuth }) => {
    const onSubmit = values => {
        login(values.email, values.password, values.rememberMe);
    };

    if (isAuth) {
        return <Redirect to={'/profile'} />;
    }

    return (
        <div>
            <h1>Login Form</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
