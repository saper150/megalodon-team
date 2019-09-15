import * as React from 'react'
import ReactDom from 'react-dom'

import './index.css'

import './notifications'
import { ChartApp } from './chart';
import { Meter } from './meter'
import { Info } from './info'
import firebase from 'firebase';
import { DateTime } from 'luxon'

function clamp(value) {
    return Math.max(0, Math.min(99, value))
}

function App() {

    const [aqi, setAqi] = React.useState(50)
    React.useEffect(() => {
        firebase.firestore().collection('measurements').onSnapshot((snapshot) => {

            let c
            let time = Infinity
            snapshot.forEach(doc => {
                if (Math.abs(DateTime.fromISO(doc.id).diffNow()) < time) {
                    time = Math.abs(DateTime.fromISO(doc.id).diffNow())
                    c = doc.data()
                }
            })
            console.log(c)
            setAqi(c.agi)
        })
        console.log('runs on create')
    }, [])

    return <div className="layout-main">
        <div className="column">
            <Meter aqi={aqi} />
            <ChartApp />
            <div className="info-box">
                <div className="column">
                    <Info aqi={aqi} />
                </div>
            </div>
        </div>
    </div>
}

ReactDom.render(<App />, document.getElementById('app'))

