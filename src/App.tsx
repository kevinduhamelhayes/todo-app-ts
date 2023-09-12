import { useState } from 'react'
import { Todos } from './components/Todos'

const mockTodos = [
  {
    id: 1,
    text: 'todo 1',
    completed: false
  },
  {
    id: 2,
    text: 'todo 2',
    completed: false
  },
  {
    id: 3,
    text: 'todo 3',
    completed: false
  }
]


export const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemoveTodo = (id: number):void => {
    const NewTodos = todos.filter((todo) => todo.id !== id)
    setTodos(NewTodos)
  return (
    <div className="todoapp">

      <Todos
      onRemoveTodo={handleRemoveTodo}
      todos={todos} />
    </div>
  )
}
