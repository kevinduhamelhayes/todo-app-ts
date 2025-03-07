import React from 'react'
import type { Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: (id: number) => void
  onToggleTodo: (id: number) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggleTodo }) => {
  const handleToggle = () => {
    onToggleTodo(id)
  }

  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={handleToggle}
      />
      <label>{title}</label>
      <button 
        className="destroy" 
        onClick={() => onRemoveTodo(id)}
        aria-label="Eliminar tarea"
      />
    </div>
  )
}
