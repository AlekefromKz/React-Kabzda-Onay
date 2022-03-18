const CONST_ADD_POST = 'ADD-NEW-POST';
const CONST_UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: "Hey bro", likesCount: 15},
        {id: 1, message: "Hey bro", likesCount: 15},
        {id: 1, message: "Hey bro", likesCount: 15},
        {id: 1, message: "Hey bro", likesCount: 15},
        {id: 2, message: "My second post", likesCount: 128}
    ],
    newPostText: '',
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONST_ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    id: 6,
                    message: state.newPostText,
                    likesCount: 0
                }],
                newPostText: "",
            }

        case CONST_UPDATE_NEW_POST:
            return {...state, newPostText: action.newPostText}

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: CONST_ADD_POST})
export const updateNewPostActionCreator = (text) => ({
    type: CONST_UPDATE_NEW_POST,
    postMessage: text
});
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
});

export default profileReducer;