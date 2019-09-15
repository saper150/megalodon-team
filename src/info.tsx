import React from 'react'

interface ILevel {
    info: string
    notify: string
    color: string
}

const levels: ILevel[] = [
    {
        info: 'Czyste powietrze',
        notify: 'Warto wyjść na spacer na świeżym powietrzu',
        color: '#79bc6a'
    },
    {
        info: 'Niskie zanieczyszczenie',
        notify: 'Jakoś powietrza jest dobra',
        color: '#bbcf4c',
    },
    {
        info: 'Przeciętne zanieczyszczenie',
        notify: 'Powietrze jest troche zanieczyszczone',
        color: '#eec20b',
    },
    {
        info: 'Zanieczyszczone powietrze',
        notify: 'Powietrze jest zanieczyszczone',
        color: '#f29305',
    },
    {
        info: 'Duże zanieczyszczenie powietrza',
        notify: 'Powietrze jest szkodliwe',
        color: '#e8416f',
    }
]


function mapAqiToInfo(aqi) {
    return levels[Math.max(Math.ceil(aqi / 20) - 1, 0)]
}

console.log(mapAqiToInfo(0.2).notify)

export function Info(data) {
    const air = mapAqiToInfo(data.aqi)
    const style = {
        color: air.color
    }
    return <div className="info">
            Aktualy stan:
            <br/>
            <span style={style}>{air.info}</span>
            <br />
            {air.notify}
    </div>
}