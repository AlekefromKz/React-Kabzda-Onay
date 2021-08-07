import rerenderEntireDom from "../render";

let state = {
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
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireDom(state)
}

export let updateNewPost = (postMessage) => {
    state.profilePage.newPostText = postMessage;
    rerenderEntireDom(state)
}

export let addMessage = () => {
    let newMessage = {
        id: 3,
        message: state.dialogsPage.newMessageText,
        my: true
    }
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireDom(state)
}

export let updateNewMessage = (message) => {
    state.dialogsPage.newMessageText = message;
    rerenderEntireDom(state)
}

export default state;