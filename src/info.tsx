import React from 'react'

interface ILevel {
    info: string
    notify: string
}

const levels: ILevel[] = [
    {
        info: 'Czyste powietrze',
        notify: 'Warto wyjść na spacer na świeżym powietrzu'
    },
    {
        info: 'Niskie zanieczyszczenie',
        notify: 'Jakoś powietrza jest dobra'
    },
    {
        info: 'Przeciętne zanieczyszczenie',
        notify: 'Powietrze jest troche zanieczyszczone'
    },
    {
        info: 'Zanieczyszczone powietrze',
        notify: 'Powietrze jest zanieczyszczone'
    },
    {
        info: 'Duże zanieczyszczenie powietrza',
        notify: 'Powietrze jest szkodliwe'
    }
]


function mapAqiToInfo(aqi) {
    return levels[Math.max(Math.ceil(aqi / 20) - 1, 0)]
}

console.log(mapAqiToInfo(0.2).notify)

export function Info(data) {
    const air = mapAqiToInfo(data.aqi)
    return <div className="info">
        <h1>
            Aktualy stan:
            <br/>
            {air.info}
            <br />
            {air.notify}
        </h1>
    </div>
}