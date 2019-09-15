import React from 'react'
import './meter.css'

function clamp(value) {
    return Math.max(0, Math.min(100, value))
}

export function Meter(data) {
    const clamped = clamp(data.aqi)
    const arrowStyle = {
        top: `calc(${clamped}% - ${clamped > 90 ? 20 : 0}px`
    }
    return <div className="meter">
        <div className="alert meter-part"></div>
        <div className="warning meter-part"></div>
        <div className="good meter-part"></div>
        <div className="arrow" style={arrowStyle}></div>
    </div>
}