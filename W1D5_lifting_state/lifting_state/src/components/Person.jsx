import React from 'react'

const Person = (props) => {
  return (
    <div>{props.i + 1} - {props.person.name}, is {props.person.age} years old</div>
  )
}

export default Person