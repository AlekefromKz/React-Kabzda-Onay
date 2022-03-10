const CONST_ADD_POST = 'ADD-NEW-POST';
const CONST_UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hey bro", likesCount: 15},
        {id: 1, message: "Hey bro", likesCount: 15},
        {id: 1, message: "Hey bro", likesCount: 15},
        {id: 1, message: "Hey bro", likesCount: 15},
        {id: 2, message: "My second post", likesCount: 128}
    ],
        newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case CONST_ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case CONST_UPDATE_NEW_POST:
            state.newPostText = action.postMessage;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: CONST_ADD_POST})
export const updateNewPostActionCreator = (text) => ({
    type: CONST_UPDATE_NEW_POST,
    postMessage: text
});

export default profileReducer;