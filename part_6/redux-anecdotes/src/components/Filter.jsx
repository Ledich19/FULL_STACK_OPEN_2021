import React from 'react'
import { connect } from 'react-redux'
import { filterAnecdotes } from '../reducers/filtrReducer'

const Filter = (props) => {

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={(e) => {props.filterAnecdotes(e.target.value)}} />
    </div>
  )
}

const mapDispatchToProps = {
  filterAnecdotes,
}

const ConectFilter = connect(null, mapDispatchToProps)(Filter)
export default ConectFilter