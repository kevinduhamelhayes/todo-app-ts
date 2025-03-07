import React from 'react'
import { Todo } from './Todo'
import type { ListOfTodos } from '../types'

interface Props {
  todos: ListOfTodos
  onRemoveTodo: (id: number) => void
  onToggleTodo: (id: number) => void
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleTodo={onToggleTodo}
          />
        </li>
      ))}
    </ul>
  )
}
