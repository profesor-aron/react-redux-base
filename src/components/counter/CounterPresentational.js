import React from 'react'

export const Counter = ({ num, increase, decrease }) => (
  <div>
    { num }
    <button onClick={() => increase(1)}>Increase</button>
    <button onClick={() => decrease(1)}>Decrease</button>
  </div>
)
