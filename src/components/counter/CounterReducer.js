// @flow

import { COUNTER_TYPES } from './CounterTypes'

const initialState = {
  num: 0
}

type CounterType = {
  num: number  
}

type CounterActionType = {
  type: string,
  value: number 
}

export const counter = (state: CounterType = initialState, action: CounterActionType) => {
  switch (action.type) {
    case COUNTER_TYPES.INCREASE:
      return {
        ...state,
        num: (state.num + action.value)
      }
    case COUNTER_TYPES.DECREASE:
      return {
        ...state,
        num: (state.num - action.value)
      }
    default:
      return state
  }
}
