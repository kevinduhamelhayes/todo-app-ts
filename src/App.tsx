import { useState, useEffect } from 'react'
import { Todos } from './components/Todos'
import { TodoForm } from './components/TodoForm'
import { TodoFilter, type FilterValue } from './components/TodoFilter'
import { type ListOfTodos } from './types'

const STORAGE_KEY = 'todo-app-ts-todos'

const initialTodos = [
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

// Función para cargar tareas desde localStorage
const loadTodos = (): ListOfTodos => {
  const savedTodos = localStorage.getItem(STORAGE_KEY)
  return savedTodos ? JSON.parse(savedTodos) : initialTodos
}

export const App = (): JSX.Element => {
  const [todos, setTodos] = useState<ListOfTodos>(loadTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>('all')
  const [loading, setLoading] = useState(true)

  // Efecto para simular carga inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 800)
    
    return () => clearTimeout(timer)
  }, [])

  // Efecto para guardar tareas en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

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

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Cargando tareas...</p>
      </div>
    )
  }

  return (
    <div className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <TodoForm onAddTodo={handleAddTodo} />
      </header>
      
      {todos.length > 0 ? (
        <>
          <Todos
            onRemoveTodo={handleRemoveTodo}
            onToggleTodo={handleToggleTodo}
            todos={filteredTodos} 
          />
          <footer className="footer">
            <span className="todo-count">
              <strong>{activeCount}</strong> {activeCount === 1 ? 'tarea pendiente' : 'tareas pendientes'}
            </span>
            {completedCount > 0 && (
              <span className="completed-count">
                <strong>{completedCount}</strong> {completedCount === 1 ? 'completada' : 'completadas'}
              </span>
            )}
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
        </>
      ) : (
        <div className="empty-state">
          <p>No hay tareas. ¡Agrega una nueva!</p>
        </div>
      )}
    </div>
  )
}
