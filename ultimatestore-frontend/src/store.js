import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import productsReducer from './reducers/manageProducts.js'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    product : productsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store