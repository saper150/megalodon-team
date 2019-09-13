import * as React from 'react'
import ReactDom from 'react-dom'

import './index.css'

import './notifications'
import { askForPermissioToReceiveNotifications } from './notifications';

function App() {
    return <div>
        <button onClick={() => askForPermissioToReceiveNotifications()}>o kurde</button>
    </div>
}

ReactDom.render(<App />, document.getElementById('app'))

