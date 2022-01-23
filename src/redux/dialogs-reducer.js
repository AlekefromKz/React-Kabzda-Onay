const CONST_ADD_MESSAGE = 'ADD-NEW-MESSAGE';
const CONST_UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
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