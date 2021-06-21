import React from 'react'

const Title = ({title}) => {
  return  <h1>{title}</h1>
}
const Part = ({name,exercises}) => {
  return <div>{name} {exercises}</div>
}
const Total =({parts}) => {
  const summ = parts.reduce((s,p) => {
    return s += p.exercises
  },0)
  return <div><b>total of {summ} exercises</b></div>
}
const Content = ({parts}) => {
  return  parts.map(part => {
    return <Part key={part.id} name={part.name} exercises={part.exercises} />
  })
}
const Course = (props) => {
  return  <>
    <Title title={props.course.name} />
    <Content parts={props.course.parts} />
    <Total parts={props.course.parts} />
  </>
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7
,        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }
  return <Course course={course} />
}

export default App