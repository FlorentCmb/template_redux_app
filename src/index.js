// Librairies
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
//Components
import App from './App'
// Style
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.register()
