import { COUNTER_TYPES } from './CounterTypes'

export const increaseCounter = (value) => ({
  type: COUNTER_TYPES.INCREASE,
  value
})

export const decreaseCounter = (value) => ({
  type: COUNTER_TYPES.DECREASE,
  value
})
