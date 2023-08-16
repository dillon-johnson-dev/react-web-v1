// import ReactDom from 'react-dom'
// import App from './App'
// import './index.css'

// ReactDom.render(<App />, document.querySelector('#root'))

import React from 'react'
import { createRoot } from 'react-dom'
import App from './App'
import './index.css'

const rootElement = document.querySelector('#root')

const root = createRoot(rootElement)
root.render(<App />)
