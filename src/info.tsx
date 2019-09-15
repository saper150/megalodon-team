import React from 'react'

interface ILevel {
    info: string
    notify: string
}

const levels: ILevel[] = [
    {
        info: 'Dobrze',
        notify: 'Warto wyjść na spacer'
    },
    {
        info: 'Ok',
        notify: 'Przeciętnie'
    },
    {
        info: 'Nie bardzo',
        notify: 'Powietrze jest troche zanieczyszczone'
    },
    {
        info: 'Zanieczyszczone',
        notify: 'Powietrze jest zanieczyszczone'
    },
    {
        info: 'Duże zanieczyszczenie',
        notify: 'Ogromne zanieczyszczenie powietrza'
    }
]


export function mapAqiToInfo(aqi) {
    return levels[Math.max(Math.ceil(aqi / 20) - 1, 0)]
}

console.log(mapAqiToInfo(0.2).notify)

export function Info(data) {
    return <div className="info">
        <h1>{mapAqiToInfo(data.aqi).info}</h1>
    </div>
}