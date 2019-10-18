import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function reducer(state, action) {
    if (action.type === 'all') {
        Object.assign(state, action)
    }
    return {...state }
}

let initState = {
    a: 'a'
}

let store = new createStore(reducer, initState, applyMiddleware(thunk))

window.store = store;

export default store;