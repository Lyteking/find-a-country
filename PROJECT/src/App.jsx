import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from './Search'
import CountryCard from './CountryCard'
import { countries } from './countries_data'
import './App.css'
import Header from './Header'
import Filter from './Filter'
import lightMode from './assets/lightbulb-regular.svg'
import darkMode from './assets/lightbulb-solid.svg'
import CountryInfo from './CountryInfo'

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedContinent, setSelectedContinent] = useState('')
  const [toggleTheme, setToggleTheme] = useState('Dark')
  const [bulb, setBulb] = useState(darkMode)

  function toggle() {
    if (toggleTheme === 'Dark') {
      setToggleTheme('Light')
      setBulb(lightMode)
    } else {
      setToggleTheme('Dark')
      setBulb(darkMode)
    }
  }

  const filteredItems = countries.filter((item) => {
    const matchesSearch = item.country
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const matchesContinent = selectedContinent
      ? item.continent === selectedContinent
      : true
    return matchesSearch && matchesContinent
  })
  useEffect(() => {
    document.body.style.backgroundColor =
      toggleTheme === 'Light' ? '#102537' : '#f4f4f4'
    document.body.style.color = toggleTheme === 'Light' ? '#102537' : '#000000'
  }, [toggleTheme])

  return (
    <BrowserRouter>
      <div className={`app-background-${toggleTheme}`}>
        <div className='header'>
          <Header />
          <div className='theme'>
            <img
              id='themeBulb'
              onClick={toggle}
              src={bulb}
              alt='Theme Toggle'
            />
            <button className='dark-mode-toggle' onClick={toggle}>
              {toggleTheme} Mode
            </button>
          </div>
        </div>

        <Routes>
          {/* Home Route */}
          <Route
            path='/'
            element={
              <>
                <div className='second-section'>
                  <Search setSearchTerm={setSearchTerm} />
                  <Filter setSelectedContinent={setSelectedContinent} />
                </div>
                <CountryCard items={filteredItems} />
              </>
            }
          />

          <Route path='/:countryInfo' element={<CountryInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
