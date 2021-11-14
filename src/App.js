
import { Routes, Route, Link } from "react-router-dom"
import { CountriesList } from './components/CountriesList'
import { CountryDetails } from './components/CountryDetails'
import { Navbar } from './components/Navbar'
import data from './countries.json'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState(data)

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        setCountries(response.data)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <CountriesList countries={countries} />
          <Routes>
            <Route path="/:cca3" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App


