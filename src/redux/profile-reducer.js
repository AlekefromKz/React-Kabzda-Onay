import {profileAPI, usersAPI} from '../api/api';

const CONST_ADD_POST = 'ADD-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'Hey bro', likesCount: 15 },
        { id: 1, message: 'Hey bro', likesCount: 15 },
        {
            id: 1,
            message: 'Hey bro',
            likesCount: 15,
        },
        { id: 1, message: 'Hey bro', likesCount: 15 },
        { id: 2, message: 'My second post', likesCount: 128 },
    ],
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONST_ADD_POST:
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: 6,
                        message: action.newPostBody,
                        likesCount: 0,
                    },
                ],
            };

        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };

        case SET_STATUS:
            return { ...state, status: action.status };

        default:
            return state;
    }
};

export const addPostActionCreator = newPostBody => ({ type: CONST_ADD_POST, newPostBody });
export const getUserProfileSuccess = profile => ({ type: SET_USER_PROFILE, profile });
export const setProfileStatus = status => ({ type: SET_STATUS, status });

export const getUserProfile = userId => {
    return dispatch => {
        usersAPI.getProfile(userId).then(data => {
            dispatch(getUserProfileSuccess(data));
        });
    };
};

export const getProfileStatus = userId => {
    return dispatch => {
        profileAPI.getStatus(userId).then(data => {
            dispatch(setProfileStatus(data));
        });
    };
};

export const updateProfileStatus = statusText => {
    return dispatch => {
        profileAPI.updateStatus(statusText).then(data => {
            if (data.resultCode === 0) {
                dispatch(setProfileStatus(statusText));
            }
        });
    };
};

export default profileReducer;
