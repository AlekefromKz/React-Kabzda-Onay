import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../common/Form/FormControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Redirect } from 'react-router-dom';
import style from './../common/Form/FormControls.module.css';

const LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name="email" component={Input} validate={[required]} />
            </div>
            <div>
                <Field
                    placeholder={'Password'}
                    name={'password'}
                    type="password"
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'} component={Input} />
                Remember Me
            </div>
            {props.error && <div className={style.formControlForm}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = props => {
    const onSubmit = values => {
        props.login(values.email, values.password, values.rememberMe);
    };

    if (props.isAuth) {
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
