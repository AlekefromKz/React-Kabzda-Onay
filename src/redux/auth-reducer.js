import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = '/auth/SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export const setAuthUserDataSuccess = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: { userId, email, login, isAuth },
});

export const setAuthUserData = () => {
    return async dispatch => {
        const data = await authAPI.me();
        if (data.resultCode === 0) {
            const { id, email, login } = data.data;
            dispatch(setAuthUserDataSuccess(id, email, login, true));
        }
    };
};

export const login = (email, password, rememberMe) => {
    return async dispatch => {
        const data = await authAPI.login(email, password, rememberMe);
        if (data.resultCode === 0) {
            dispatch(setAuthUserData());
        } else {
            const message = data.messages.length > 0 ? data.messages[0] : 'An error occurred!';
            dispatch(stopSubmit('login', { _error: message }));
        }
    };
};

export const logout = () => {
    return async dispatch => {
        const data = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setAuthUserDataSuccess(null, null, null, false));
        }
    };
};

export default authReducer;
