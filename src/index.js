import { createStore } from "redux";
import reducer from './reducer';
import {inc, dec, res} from './action';

const store = createStore(reducer);
const {dispatch} = store;

const bindActionCreator = (creator, dispatch) => (...args) => { // для наглядности как работает встроенная func в redux
    dispatch(creator(...args));
}

const incDispatch = bindActionCreator(inc, dispatch);
const decDispatch = () => dispatch(dec());
const resDispatch = () => dispatch(res());

document.getElementById('inc').addEventListener('click', incDispatch);
document.getElementById('dec').addEventListener('click', decDispatch);
document.getElementById('res').addEventListener('click', resDispatch);

const update = () => {
    document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);
