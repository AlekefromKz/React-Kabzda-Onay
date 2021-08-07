import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMessage, updateNewPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireDom = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPost={updateNewPost}
                addMessage={addMessage}
                updateNewMessage={updateNewMessage}
            />
        </BrowserRouter>, document.getElementById('root'));
};

export default rerenderEntireDom;