import { useState } from 'react'
import { Todos } from './components/Todos'
import { TodoForm } from './components/TodoForm'
import { TodoFilter, type FilterValue } from './components/TodoFilter'
import { type ListOfTodos } from './types'

const mockTodos = [
  {
    id: 1,
    title: 'Aprender React',
    completed: false
  },
  {
    id: 2,
    title: 'Aprender TypeScript',
    completed: false
  },
  {
    id: 3,
    title: 'Implementar Todo App',
    completed: false
  }
]

export const App = (): JSX.Element => {
  const [todos, setTodos] = useState<ListOfTodos>(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>('all')

  const handleRemoveTodo = (id: number): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleToggleTodo = (id: number): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleAddTodo = (title: string): void => {
    const newTodo = {
      id: Math.max(0, ...todos.map(todo => todo.id)) + 1,
      title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const handleClearCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === 'active') return !todo.completed
    if (filterSelected === 'completed') return todo.completed
    return true
  })

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount
  const hasCompleted = completedCount > 0

  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoForm onAddTodo={handleAddTodo} />
      </header>
      <Todos
        onRemoveTodo={handleRemoveTodo}
        onToggleTodo={handleToggleTodo}
        todos={filteredTodos} 
      />
      {todos.length > 0 && (
        <footer className="footer">
          <span className="todo-count">
            <strong>{activeCount}</strong> {activeCount === 1 ? 'tarea pendiente' : 'tareas pendientes'}
          </span>
          <TodoFilter 
            filterSelected={filterSelected} 
            onFilterChange={setFilterSelected} 
          />
          {hasCompleted && (
            <button 
              className="clear-completed"
              onClick={handleClearCompleted}
            >
              Borrar completadas
            </button>
          )}
        </footer>
      )}
    </div>
  )
}
