import {authAPI, securityAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = '/auth/SET_USER_DATA';
const SET_CAPTCHA_ULR = '/auth/SET_CAPTCHA_ULR';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,  // if null, then ok. else: need to send this as well
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_ULR:
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

export const setCaptchaUrlSuccess = (url) => ({
    type: SET_CAPTCHA_ULR,
    payload: { captchaUrl: url }
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

export const login = (email, password, rememberMe, captcha) => {
    return async dispatch => {
        const data = await authAPI.login(email, password, rememberMe, captcha);
        if (data.resultCode === 0) {
            dispatch(setAuthUserData());
        }
        else {
            if (data.resultCode === 10){
                dispatch(getCaptchaUrl())
            }
            const message = data.messages.length > 0 ? data.messages[0] : 'An error occurred!';
            dispatch(stopSubmit('login', { _error: message }));
        }
    };
};

export const getCaptchaUrl = () => {
    return async dispatch => {
        const data = await securityAPI.getCaptchaUrl();
        dispatch(setCaptchaUrlSuccess(data.url))
    };
};

export const logout = () => {
    return async dispatch => {
        const data = await authAPI.logout();
        if (data.resultCode === 0) {
            dispatch(setAuthUserDataSuccess(null, null, null, false));
            dispatch(setCaptchaUrlSuccess(null))
        }
    };
};

export default authReducer;
