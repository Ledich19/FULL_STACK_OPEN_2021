import React from 'react'

const Title = ({title}) => {
    return  <h2>{title}</h2>
  }
  const Total =({parts}) => {
    const summ = parts.reduce((s,p) => s += p.exercises,0)
    return <div><b>total of {summ} exercises</b></div>
  }
  const Content = ({parts}) => {
    return  parts.map(({id,name,exercises}) => {
      return <div  key={id}>{name} {exercises}</div>
    })
  }
  const Course = (props) => {
    return  <>
      <Title title={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </>
  }

  export default Course