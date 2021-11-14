
import { Routes, Route, Link } from "react-router-dom"
import { CountriesList } from './components/CountriesList'
import { CountryDetails } from './components/CountryDetails'
import { Navbar } from './components/Navbar'
import data from './countries.json'


function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <CountriesList data={data} />
          <Routes>
            <Route path="/:cca3" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App


