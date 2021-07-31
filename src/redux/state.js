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
        ]
    },

    profilePage: {
        posts: [
            {id: 1, message: "Hey bro", likesCount: 15},
            {id: 1, message: "Hey bro", likesCount: 15},
            {id: 1, message: "Hey bro", likesCount: 15},
            {id: 1, message: "Hey bro", likesCount: 15},
            {id: 2, message: "My second post", likesCount: 128}
        ]
    },

    closeFriendsPage: {
        closeFriends: [
            {id: 1, name: 'Aijas'},
            {id: 2, name: 'Oljas'},
            {id: 3, name: 'Mahir'},
        ]
    }
}

export default state;