import * as React from 'react'
import ReactDom from 'react-dom'

import './index.css'

import './notifications'
import { askForPermissioToReceiveNotifications } from './notifications';
import { ChartApp } from './chart';

function App() {

    function send() {
        fetch('https://fcm.googleapis.com/fcm/send', {
            method: 'POST',
            body: JSON.stringify({
                data: {
                    "notification": {
                        "title": "Firebase",
                        "body": "Firebase is awesome",
                        "click_action": "http://localhost:3000/",
                        "icon": "http://url-to-an-icon/icon.png"
                    },
                },
                "to": "e6smC20mHW4:APA91bHS_2LVhJx1AmPvqrwoHHZ5t27FEVlM-CLHUdIXzV--sxft5-oIaam4O0D_8XfonL5viGJu9gYkeS8q1QcpwiXIRXxqwGz_7z-U592DyO_AgwjUFmTdW_zrRsxd7PbCZgRPpAmW",
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'key=AAAAnnCwe6k:APA91bFVO-3-SdG70fByMVoBHkmP0R-zxmyqPshCdfdozTt6TVPd8vVwqos0R3YgLG176h3rYjQUtFOioe-55q3-Va8vBARxnRF79HDx1CB01_roZRgi26gm4j46hGfEtdYXwQxwQRAY'
            },
        })

    }

    const [counter, setCounter] = React.useState(1)
    React.useEffect(() => {
        console.log('runs on create')
    })


    return <div>
        <button onClick={() => askForPermissioToReceiveNotifications()}>o kurde</button>
        <button onClick={() => send()}>o kurde2</button>
        {counter}
        <button onClick={() => setCounter(counter + 1)}>inc counter</button>
		<ChartApp />
    </div>
}

ReactDom.render(<App />, document.getElementById('app'))

