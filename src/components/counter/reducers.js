import { combineReducers } from 'redux'
import { counter } from './CounterReducer'

export const counterApp = combineReducers({
  counter
})
