import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import store from "./redux/redux-store";
import './index.css';

let rerenderEntireDom = (store) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireDom(store);

store.subscribe(() => {
    rerenderEntireDom(store);
});

export default rerenderEntireDom;
