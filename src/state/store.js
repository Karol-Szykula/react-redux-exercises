import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import firstActionReducerName, { firstAction } from './firstAction'
import counterReducerName, { inc, dec } from './counter'

export const reducer = combineReducers({
    firstActionReducerName,
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

window.dispatchFirstAction = () => store.dispatch(firstAction())

window.dispatchIncAction = () => store.dispatch(inc())
window.dispatchDecAction = () => store.dispatch(dec())

// store.dispatch({ type: 'FIRST_ACTION' })