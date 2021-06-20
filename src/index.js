import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from "redux";
import reducer from './reducer';
import * as actions from './action';
import Counter from "./components/counter";

const store = createStore(reducer);
const {dispatch} = store;

const {inc, dec, res} = bindActionCreators (actions, dispatch);

const update = () => {
    ReactDOM.render(<Counter
        counter={store.getState()}
        inc={inc}
        dec={dec}
        res={res} />, document.getElementById('root'));
}
update();

store.subscribe(update);