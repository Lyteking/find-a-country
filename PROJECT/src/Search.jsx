import React from 'react'
import './App.css'
import search from './assets/search.svg'

export default function Search({ setSearchTerm }) {
  return (
    <div className='search-box'>
      <img className='search-img' src={search} alt='Search Icon' />
      <input
        className='input'
        type='text'
        placeholder='Search'
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}
