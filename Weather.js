import React from 'react'
import "./weaather.css"
function Weather({date,mintemp,maxtemp,condition,icon}) {
    return (
        <div className="results">
            <h2>{date}</h2>
            <ul>
                <li><img src={icon} alt="" /> </li>
                <li>{condition}</li>
                <li>{mintemp} {maxtemp} </li>
            </ul>
            
        </div>
    )
}

export default Weather
