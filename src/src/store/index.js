import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { filterBy, data, hasErrored, isLoading } from './Reducers'

const stateData = {}

const storeFactory = (initialState = stateData) =>
    applyMiddleware(thunk)(createStore)(
        combineReducers({ hasErrored, isLoading, filterBy, data }),
        initialState
    )

export default storeFactory
