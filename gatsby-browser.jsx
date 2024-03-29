import 'lazysizes'
import React from 'react'
import ReactDOM from 'react-dom'
import SwUpdater from './src/components/SwUpdater'

require('prismjs/themes/prism-tomorrow.css')

function onServiceWorkerUpdateReady() {
  const root = document.createElement('div')
  document.body.appendChild(root)

  ReactDOM.render(<SwUpdater />, root)
}

export { onServiceWorkerUpdateReady }
