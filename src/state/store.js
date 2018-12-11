import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import counterReducerName, { inc, dec } from './counter'

export const reducer = combineReducers({
    counterReducerName
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store

window.dispatchIncAction = () => store.dispatch(inc())
window.dispatchDecAction = () => store.dispatch(dec())

// store.dispatch({ type: 'FIRST_ACTION' })