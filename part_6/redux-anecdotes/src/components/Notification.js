import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}
const mapDispatchToProps = {

}

const mapStateToProps = (state) => {
  if (!state.notification) {
    return { notification: null }
  }
  return { notification: state.notification }
}
const coectNotification = connect(mapStateToProps, mapDispatchToProps)(Notification)
export default coectNotification