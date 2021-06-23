import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Country from './components/Country';
import Countries from './components/Countries';

function App() {
const [countries, setCountries] = useState([])
useEffect(() =>{
  axios
  .get('https://restcountries.eu/rest/v2/all')
  .then(response => setCountries(response.data))
},[])
const [filterText, setFilterText] = useState('')
const [showWeather, setShowWeather] = useState([''])

const countriesShow = countries.filter((country) => {
  return country.name.toUpperCase().includes(filterText.toUpperCase())
})

const showCountry = (country) => {
  setFilterText(country)
} 

  return (
    <div className="App">
      <div>
		    find countries: 
        <input 
        value={filterText} 
        onChange={(e) => setFilterText(e.target.value)}
        />
	    </div>
      <div>
        {countriesShow.length === 1 
        ? <Country  countryShow={countriesShow} showWeather={showWeather} setShowWeather={setShowWeather}/>
        : <Countries countries={countriesShow} 
        handleClick={showCountry} />}
      </div>
    </div>
  );
}

export default App;
