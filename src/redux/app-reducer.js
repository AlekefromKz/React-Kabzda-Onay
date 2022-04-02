import {setAuthUserData} from './auth-reducer';

const SET_INITIALIZED = '/app/SET_INITIALIZED';

const initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

export const initializationSucceeded = () => ({
    type: SET_INITIALIZED,
});

export const initializeApp = () => dispatch => {
    Promise.all([dispatch(setAuthUserData())]).then(() => {
        dispatch(initializationSucceeded());
    });
};

export default appReducer;
