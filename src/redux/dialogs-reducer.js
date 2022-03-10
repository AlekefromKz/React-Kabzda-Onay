const CONST_ADD_MESSAGE = 'ADD-NEW-MESSAGE';
const CONST_UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONST_ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessageText,
                my: true
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case CONST_UPDATE_NEW_MESSAGE:
            state.newMessageText = action.messageMessage;
            return state;

        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: CONST_ADD_MESSAGE})
export const updateNewMessageActionCreator = (text) => ({
    type: CONST_UPDATE_NEW_MESSAGE,
    messageMessage: text
});

export default dialogsReducer;