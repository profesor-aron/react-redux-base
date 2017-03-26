// @flow

import { COUNTER_TYPES } from './CounterTypes'

const initialState = {
  num: 0
}

export const counter = (state = initialState, action) => {
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
