import React, { useState } from 'react'

interface Props {
  onAddTodo: (title: string) => void
}

export const TodoForm: React.FC<Props> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedValue = inputValue.trim()
    
    if (trimmedValue !== '') {
      onAddTodo(trimmedValue)
      setInputValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        className="new-todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="¿Qué necesitas hacer?"
        autoFocus
        maxLength={100}
      />
      <span className="input-hint">Presiona Enter para agregar</span>
    </form>
  )
} 