import { createStore, combineReducers } from 'redux'
import productReducer from './productReducer'

const reducers = combineReducers({
  productReducer
})

let store = createStore(reducers)

export default store