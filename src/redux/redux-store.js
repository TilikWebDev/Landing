import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleWare from 'redux-thunk';

import usersReducer from './users-reducer';
import resgisterReducer from './register-reducer';
import appReducer from './app-reducer';

let reducers = combineReducers({
    users: usersReducer,
    register: resgisterReducer,
    app: appReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;