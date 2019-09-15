import React from 'react'


export function Info(data) {
    if (data.aqi < 20) {
        return <h1>Dobrze</h1>
    } else if (data.aqi < 40) {
        return <h1>Ok</h1>
    } else if (data.aqi < 60) {
        return <h1>Nie bardzo</h1>
    } else if (data.aqi < 80) {
        return <h1>Zanieczyszczone</h1>
    } else {
        return <h1>Syf</h1>
    }
}