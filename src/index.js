import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import store from "./redux/redux-store";
import './index.css';
import {Provider} from "react-redux";

const rerenderEntireDom = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireDom(store.getState());

store.subscribe(() => {
    rerenderEntireDom(store.getState());
});

export default rerenderEntireDom;
