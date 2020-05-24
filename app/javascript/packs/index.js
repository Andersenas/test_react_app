import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../components/App'
import 'bootstrap/dist/css/bootstrap.css'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
    	<App/>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
