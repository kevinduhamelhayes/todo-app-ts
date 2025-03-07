import React from 'react'

export type FilterValue = 'all' | 'active' | 'completed'

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

export const TodoFilter: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className="filters">
      <li>
        <a 
          href="#/" 
          className={filterSelected === 'all' ? 'selected' : ''}
          onClick={() => onFilterChange('all')}
        >
          Todas
        </a>
      </li>
      <li>
        <a 
          href="#/active" 
          className={filterSelected === 'active' ? 'selected' : ''}
          onClick={() => onFilterChange('active')}
        >
          Activas
        </a>
      </li>
      <li>
        <a 
          href="#/completed" 
          className={filterSelected === 'completed' ? 'selected' : ''}
          onClick={() => onFilterChange('completed')}
        >
          Completadas
        </a>
      </li>
    </ul>
  )
} 