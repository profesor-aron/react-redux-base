// @flow

import { COUNTER_TYPES } from './CounterTypes'

export const increaseCounter = (value: number) => ({
  type: COUNTER_TYPES.INCREASE,
  value
})

export const decreaseCounter = (value: number) => ({
  type: COUNTER_TYPES.DECREASE,
  value
})
