import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    { id: 1, name: 'Almaz' },
    { id: 2, name: 'Ainur' },
    { id: 3, name: 'Aliko' },
    { id: 4, name: 'Qanat' },
    { id: 5, name: 'Dinara' },
]

let messages = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Yo' },
    { id: 3, message: 'Bro' },
    { id: 3, message: 'Bro' },
    { id: 3, message: 'Bro' },
    { id: 3, message: 'Bro' },
    { id: 3, message: 'Bro' },
    { id: 3, message: 'Bro' },
]

let posts = [
    { id: 1, message: "Hey bro", likesCount: 15 },
    { id: 1, message: "Hey bro", likesCount: 15 },
    { id: 1, message: "Hey bro", likesCount: 15 },
    { id: 1, message: "Hey bro", likesCount: 15 },
    { id: 2, message: "My second post", likesCount: 128 }
]

ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts} />, document.getElementById('root'));

reportWebVitals();
