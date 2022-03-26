const CONST_ADD_MESSAGE = 'ADD-NEW-MESSAGE';

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
    let stateCopy = {...state};
    switch (action.type) {
        case CONST_ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: action.message,
                my: true
            };
            stateCopy.messages = [...stateCopy.messages];
            stateCopy.messages.push(newMessage);
            return stateCopy;

        default:
            return state;
    }
}

export const addMessage = (message) => ({type: CONST_ADD_MESSAGE, message})

export default dialogsReducer;