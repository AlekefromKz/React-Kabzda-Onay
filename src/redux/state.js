const CONST_ADD_POST = 'ADD-NEW-POST';
const CONST_UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT';
const CONST_ADD_MESSAGE = 'ADD-NEW-MESSAGE';
const CONST_UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE-TEXT';


const store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Almaz'},
                {id: 2, name: 'Ainur'},
                {id: 3, name: 'Aliko'},
                {id: 4, name: 'Qanat'},
                {id: 5, name: 'Dinara'},
            ],
            messages: [
                {id: 1, message: 'Salem', my: true},
                {id: 2, message: 'Sagan', my: true},
                {id: 3, message: 'Qazaq', my: false},
                {id: 3, message: 'Elim', my: true},
                {id: 3, message: 'Tauelsiz', my: false},
                {id: 3, message: 'Elim', my: false},
                {id: 3, message: 'Qazagym', my: true},
                {id: 3, message: 'Menin', my: false},
            ],
            newMessageText: ''
        },

        profilePage: {
            posts: [
                {id: 1, message: "Hey bro", likesCount: 15},
                {id: 1, message: "Hey bro", likesCount: 15},
                {id: 1, message: "Hey bro", likesCount: 15},
                {id: 1, message: "Hey bro", likesCount: 15},
                {id: 2, message: "My second post", likesCount: 128}
            ],
            newPostText: ''
        },

        closeFriendsPage: {
            closeFriends: [
                {id: 1, name: 'Aijas'},
                {id: 2, name: 'Oljas'},
                {id: 3, name: 'Mahir'},
            ]
        }
    },

    _callSubscriber() {
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === CONST_ADD_POST) {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === CONST_UPDATE_NEW_POST) {
            this._state.profilePage.newPostText = action.postMessage;
            this._callSubscriber(this._state);
        } else if (action.type === CONST_ADD_MESSAGE) {
            let newMessage = {
                id: 6,
                message: this._state.dialogsPage.newMessageText,
                my: true
            };

            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === CONST_UPDATE_NEW_MESSAGE){
            this._state.dialogsPage.newMessageText = action.messageMessage;
            this._callSubscriber(this._state);
        }
    }
}

// POSTS
export const addPostActionCreator = () => ({type: CONST_ADD_POST})
export const updateNewPostActionCreator = (text) => ({
    type: CONST_UPDATE_NEW_POST,
    postMessage: text
});

// MESSAGES
export const addMessageActionCreator = () => ({type: CONST_ADD_MESSAGE})
export const updateNewMessageActionCreator = (text) => ({
    type: CONST_UPDATE_NEW_MESSAGE,
    messageMessage: text
});


export default store;
window.store = store;
