import React from 'react'
import './meter.css'
import cloud from '../static/cloud.svg'

export function Meter(data) {
    const arrowStyle = {
        top: `calc(${100 - data.aqi}% - ${100 - data.aqi > 90 ? 30 : 0}px`
    }
    return <React.Fragment>
    <div className="meter">
        <div className="arrow" style={arrowStyle}>
            <img src={cloud} />
        </div>
    </div>
    <div className="particle" style={arrowStyle}></div>
    </React.Fragment>
}