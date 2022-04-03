import {profileAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const CONST_ADD_POST = 'ADD-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO';
const PROFILE_UPDATED_SUCCESS = 'PROFILE_UPDATED_SUCCESS';

let initialState = {
    posts: [
        { id: 1, message: 'Hey bro', likesCount: 15 },
        { id: 2, message: 'Hey bro', likesCount: 15 },
        { id: 3, message: 'Hey bro', likesCount: 15 },
        { id: 4, message: 'Hey bro', likesCount: 15 },
        { id: 5, message: 'My second post', likesCount: 128 },
    ],
    profile: null,
    status: '',
    profileUpdatedSuccess: false,
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

        case SAVE_PHOTO:
            return { ...state, profile: { ...state.profile, photos: action.photos } };

        case PROFILE_UPDATED_SUCCESS:
            return { ...state, profileUpdatedSuccess: action.profileUpdatedSuccess };

        default:
            return state;
    }
};

export const addPostActionCreator = newPostBody => ({ type: CONST_ADD_POST, newPostBody });
export const getUserProfileSuccess = profile => ({ type: SET_USER_PROFILE, profile });
export const setProfileStatus = status => ({ type: SET_STATUS, status });
export const savePhotoSuccess = photos => ({ type: SAVE_PHOTO, photos });
export const toggleProfileUpdatedSuccess = profileUpdatedSuccess => ({
    type: PROFILE_UPDATED_SUCCESS,
    profileUpdatedSuccess,
});

export const getUserProfile = userId => {
    return async dispatch => {
        const data = await profileAPI.getProfile(userId);
        dispatch(getUserProfileSuccess(data));
    };
};

export const getProfileStatus = userId => {
    return async dispatch => {
        const data = await profileAPI.getStatus(userId);
        dispatch(setProfileStatus(data));
    };
};

export const updateProfileStatus = statusText => {
    return async dispatch => {
        const data = await profileAPI.updateStatus(statusText);
        if (data.resultCode === 0) {
            dispatch(setProfileStatus(statusText));
        }
    };
};

export const savePhoto = file => {
    return async dispatch => {
        const data = await profileAPI.savePhoto(file);
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos));
        }
    };
};

export const saveProfile = profile => {
    return async (dispatch, getState) => {
        const data = await profileAPI.saveProfile(profile);
        if (data.resultCode === 0) {
            dispatch(getUserProfile(getState().auth.userId));
            dispatch(toggleProfileUpdatedSuccess(true));
        } else {
            const message = data.messages.length > 0 ? data.messages[0] : 'An error occurred!';
            dispatch(stopSubmit('profile-edit', { _error: message }));
            dispatch(toggleProfileUpdatedSuccess(false));
        }
    };
};

export default profileReducer;
