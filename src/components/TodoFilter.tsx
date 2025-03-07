import React from 'react'

export type FilterValue = 'all' | 'active' | 'completed'

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

export const TodoFilter: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  const handleFilterChange = (filter: FilterValue, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onFilterChange(filter)
  }

  return (
    <ul className="filters">
      <li>
        <a 
          href="#/" 
          className={filterSelected === 'all' ? 'selected' : ''}
          onClick={(e) => handleFilterChange('all', e)}
          title="Ver todas las tareas"
        >
          Todas
        </a>
      </li>
      <li>
        <a 
          href="#/active" 
          className={filterSelected === 'active' ? 'selected' : ''}
          onClick={(e) => handleFilterChange('active', e)}
          title="Ver solo tareas pendientes"
        >
          Activas
        </a>
      </li>
      <li>
        <a 
          href="#/completed" 
          className={filterSelected === 'completed' ? 'selected' : ''}
          onClick={(e) => handleFilterChange('completed', e)}
          title="Ver solo tareas completadas"
        >
          Completadas
        </a>
      </li>
    </ul>
  )
} 