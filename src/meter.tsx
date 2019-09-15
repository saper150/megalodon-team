import React from 'react'
import './meter.css'
import cloud from '../assets/cloud.svg'

function clamp(value) {
    return Math.max(0, Math.min(99, value))
}

export function Meter(data) {
    const clamped = clamp(data.aqi)
    const arrowStyle = {
        top: `calc(${clamped}% - ${clamped > 90 ? 30 : 0}px`
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