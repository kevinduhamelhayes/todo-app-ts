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

  const handleRemove = () => {
    const element = document.getElementById(`todo-${id}`)
    if (element) {
      element.classList.add('removing')
      setTimeout(() => {
        onRemoveTodo(id)
      }, 300)
    } else {
      onRemoveTodo(id)
    }
  }

  return (
    <div className="view" id={`todo-${id}`}>
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={handleToggle}
      />
      <label onClick={handleToggle} title={completed ? "Marcar como pendiente" : "Marcar como completada"}>
        {title}
      </label>
      <button 
        className="destroy" 
        onClick={handleRemove}
        aria-label="Eliminar tarea"
        title="Eliminar tarea"
      />
    </div>
  )
}
