import { createStore, bindActionCreators } from "redux";
import reducer from './reducer';
import {inc, dec, res} from './action';

const store = createStore(reducer);
const {dispatch} = store;

const {incDispatch, decDispatch, resDispatch} = bindActionCreators (
    {
        incDispatch: inc,
        decDispatch: dec,
        resDispatch: res
    }
    , dispatch);


// const decDispatch = bindActionCreators(dec, dispatch);
// const resDispatch = bindActionCreators(res, dispatch);

document.getElementById('inc').addEventListener('click', incDispatch);
document.getElementById('dec').addEventListener('click', decDispatch);
document.getElementById('res').addEventListener('click', resDispatch);

const update = () => {
    document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);
