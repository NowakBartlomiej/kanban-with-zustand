import React from 'react'
import "./Column.css"
import { Task } from './Task'

export const Column = ({state}) => {
  return (
    <div className='column'>
        <p>{state}</p>
        <Task title="todo"/>
    </div>
  )
}
