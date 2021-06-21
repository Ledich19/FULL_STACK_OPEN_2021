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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
   
    <div>
       <h1>Web development curriculum</h1>
      {courses.map((course) => {
      return <Course key={course.id} course={course} />
      })}
    </div>
  )
    
}

export default App