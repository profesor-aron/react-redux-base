import { connect } from 'react-redux'
import { Counter } from './CounterPresentational'
import * as actions from './CounterActions'

const mapStateToProps = (state) => ({
  num: state.counter.num
})

const mapDispatchToProps = (dispatch) => ({
  increase: (value) => {
    dispatch(actions.increaseCounter(value))
  },
  decrease: (value) => {
    dispatch(actions.decreaseCounter(value))
  }
})

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
