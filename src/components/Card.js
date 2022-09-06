import React from 'react'
import spot from '../images/spot.svg'

function upperCase(str) {
    return str.toUpperCase()
}

export default function Card(props) {
    const capitalizedLocation = upperCase(props.location)
    return (
        <div className="card">
            <img className="card--img" alt="{props.title}" src={props.imageUrl} />
            <div className="card--details">
                <div className="card--group-1">
                    <img src={spot} alt="card--spot-icon" className="card--icon" />
                    <p className="card--country">{capitalizedLocation}</p>
                    <p><a href={props.googleMapsUrl}>View on Google Maps</a></p>
                </div>
                <div className="card--group-2">
                    <h1 className="card--title">{props.title}</h1>
                    <p className="card--date">{props.startDate} - {props.endDate}</p>
                    <p className="card--description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}
