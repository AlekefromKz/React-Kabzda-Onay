const CONST_ADD_POST = 'ADD-NEW-POST';
const CONST_UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
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