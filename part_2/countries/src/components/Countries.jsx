import React from "react"

const Countries = ({ countries, handleClick }) => {
    return <div>
        {countries.length > 10
            ? 'Too many matches, specify another filter'
            : countries.map((country) => {
                return <div key={country.name} >
                    <span>
                        {country.name}
                    </span>
                    <button onClick={() => handleClick(country.name)} >show</button>
                </div>
            })
        }
    </div>
}

export default Countries


// useEffect(() =>{
//     if (countriesShow.length ===1) {
//       axios
//     .get(`http://api.weatherstack.com/current?access_key=c4d65b7d659b3773bbb8bd94a9b16268&query=Helsinki${countriesShow[0]}`)
//     .then(response => setCapitalWeather(response.data))
//     }
//     })
//   console.log(capitalWeather)