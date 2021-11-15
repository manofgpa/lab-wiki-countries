
import { Routes, Route } from "react-router-dom"
import { CountriesList } from './components/CountriesList'
import { CountryDetails } from './components/CountryDetails'
import { Navbar } from './components/Navbar'
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all')
        setCountries(response.data.sort((a, b) => a.name.common < b.name.common ? -1 : 1))
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


