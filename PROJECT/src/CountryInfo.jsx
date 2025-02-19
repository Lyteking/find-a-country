import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { countries } from './countries_data'
import './App.css'
import { Link } from 'react-router-dom'

export default function CountryInfo({ searchTerm }) {
  const { countryInfo } = useParams()
  // React.useEffect(() => {
  //   localStorage.setItem('', searchTerm)
  // }, [searchTerm])

  console.log('Country from URL:', countryInfo)

  if (!countryInfo) {
    return <h1 className='error'>No valid country URL found</h1>
  }

  const formattedCountry = decodeURIComponent(
    countryInfo.replace('-info', '')
  ).toLowerCase()

  const selectedCountry = countries.find(
    (c) => c.country.toLowerCase() === formattedCountry
  )
  const navigate = useNavigate()
  function handleBack() {
    searchTerm('')
    navigate(-1) // Go back to the previous page
  }

  if (!selectedCountry) {
    return (
      <>
        <Link to={'/'}>
          <div className='country-details'>
            <p className='back-button'>Back</p>
            <h1 className='error'>Country not found :(</h1>
          </div>
        </Link>
      </>
    )
  }

  return (
    <>
      <div className='country-details'>
        <div className='country'>
          <p onClick={handleBack} className='back-button'>
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
      </div>
    </>
  )
}
