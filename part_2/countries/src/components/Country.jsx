import React, { useEffect } from 'react';
import axios from 'axios'

const Country = ({ countryShow, setShowWeather, showWeather }) => {
	const { name, capital, population, languages, flag } = countryShow[0]
	const api_key = process.env.REACT_APP_API_KEY
	useEffect(() => {
		axios
			.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=Helsinki${name}`)
			.then(response => setShowWeather(response))
	}, [name, setShowWeather, api_key])
	return <>
		<h1>{name}</h1>
		<div>capital: {capital}</div>
		<div>population:  {population}</div>

		<h2>languages</h2>
		<ul>
			{languages.map((language) => {
				return <li key={language.iso639_2} >{language.name}</li>
			})}
		</ul>
		<img src={flag} alt="flag" height='100px' />
		<h2>Weather in {name}</h2>
		{<div>
			<div>temperature{showWeather.temperature}</div>
			<img src={showWeather.weather_icons} alt="flag" height='100px' />
			<div>vind: {showWeather.wind_speed} {showWeather.wind_dir}</div>
		</div>}
	</>

}

export default Country