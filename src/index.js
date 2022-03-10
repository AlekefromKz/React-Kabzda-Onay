import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import store from "./redux/redux-store";
import './index.css';

const rerenderEntireDom = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireDom(store.getState());

store.subscribe(() => {
    rerenderEntireDom(store.getState());
});

export default rerenderEntireDom;
