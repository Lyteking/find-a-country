import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { countries } from './countries_data'
import './App.css'

export default function CountryInfo() {
  const { countryInfo } = useParams() // ✅ Fix: Match route param name
  const navigate = useNavigate()

  console.log('Country from URL:', countryInfo) // ✅ Debugging

  if (!countryInfo) {
    return <h1 className='error'>No valid country URL found</h1>
  }

  // Decode and match country name (case insensitive)
  const formattedCountry = decodeURIComponent(
    countryInfo.replace('-info', '')
  ).toLowerCase()

  // Find the correct country object
  const selectedCountry = countries.find(
    (c) => c.country.toLowerCase() === formattedCountry
  )

  // If country not found, show an error message
  if (!selectedCountry) {
    return (
      <div className='country-details'>
        <p className='back-button' onClick={() => navigate(-1)}>
          Back
        </p>
        <h1 className='error'>Country not found :(</h1>
      </div>
    )
  }

  return (
    <>
      <div className='country-details'>
        <p className='back-button' onClick={() => navigate(-1)}>
          Back
        </p>
      </div>
      <div className='info'>
        <img
          src={selectedCountry.flag}
          className='info-img'
          alt='Country Flag'
        />
        <div className='sub-info'>
          <h1>{selectedCountry.country}</h1>
          <div>
            <p>
              <strong>Native Name: </strong>
              {selectedCountry.country}
            </p>
            <p>
              <strong>Population: </strong>
              {selectedCountry.population}
            </p>
            <p>
              <strong>Region: </strong>
              {selectedCountry.continent}
            </p>
            <p>
              <strong>Capital: </strong>
              {selectedCountry.capital}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
