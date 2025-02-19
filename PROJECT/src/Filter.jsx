import React, { useState } from 'react'
import './App.css'

export default function Filter({ setSelectedContinent }) {
  const [isOpen, setIsOpen] = useState(false)
  const [filterMessage, setFilterMessage] = React.useState('All Continents ▼')

  const continents = [
    'Africa',
    'Asia',
    'Europe',
    'North America',
    'South America',
    'Oceania',
  ]

  function handleSelect(continent) {
    setSelectedContinent(continent)
    setFilterMessage(continent)
    setIsOpen(false)
  }
  return (
    <div className='filter-container'>
      <button className='filter-button' onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : filterMessage || 'All Continents'}
      </button>

      {isOpen && (
        <div className='dropdown'>
          <div className='dropdown-item' onClick={() => handleSelect('')}>
            All Continents
          </div>
          {continents.map((continent) => (
            <div
              key={continent}
              className='dropdown-item'
              onClick={() => handleSelect(continent)}
            >
              {continent}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
