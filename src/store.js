import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import budgetReducer from './ducks/budgetReducer';
import userReducer from './ducks/userReducer'


// combineReducers brings all reducers to ONE OBJECT

const rootReducer = combineReducers({
    budget: budgetReducer,
    user: userReducer
})

// applies promiseMiddleware when doing asycn HTTP requests

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));










