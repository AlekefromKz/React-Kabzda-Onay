import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import store from "./redux/state";
import './index.css';

let rerenderEntireDom = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireDom(store.getState());

store.subscribe(rerenderEntireDom);

export default rerenderEntireDom;
