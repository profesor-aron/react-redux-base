// @flow

import React, { Component } from 'react'
import { CounterContainer } from './counter/CounterContainer'

export default class App extends Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello profesor Aron with Redux Yupi</h1>
        <CounterContainer />
      </div>)
  }
}
