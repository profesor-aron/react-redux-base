// @flow

import React from 'react'

type CounterModelType = {
  num: number,
  increase: Function,
  decrease: Function
}

export const Counter = (counterModel: CounterModelType) => (
  <div>
    { counterModel.num }
    <button onClick={() => counterModel.increase(1)}>Increase</button>
    <button onClick={() => counterModel.decrease(1)}>Decrease</button>
  </div>
)
