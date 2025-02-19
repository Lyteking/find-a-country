import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

export default function CountryCard({ items }) {
  return (
    <div>
      <div className='container'>
        <div className='grid-container'>
          {items.length > 0 ? (
            items.map((data) => (
              <Link
                to={`/${encodeURIComponent(data.country)}-info`}
                key={data.id}
                className='card'
              >
                <img
                  src={data.flag}
                  className='flag-img'
                  alt={`${data.country} flag`}
                />
                <h4>{data.country}</h4>
                <div className='country-info'>
                  <p>
                    <strong>Population: </strong>
                    {data.population}
                  </p>
                  <p>
                    <strong>Region: </strong>
                    {data.continent}
                  </p>
                  <p>
                    <strong>Capital: </strong>
                    {data.capital}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <h1 className='error'>No such Country found :(</h1>
          )}
        </div>
      </div>
    </div>
  )
}
