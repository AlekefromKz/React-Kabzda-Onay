import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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

        sidebar: {
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
