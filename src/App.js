import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Home from './components/home.component'
import ShowData from './components/showdata.component'
import Statistics from './components/statistics.component'

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/sign-in'}>
              PPFHIR
          </Link>
        </div>
      </nav>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
              <Route path="/statistics"  element={<Statistics />}  />
              <Route path="/showdata"  element={<ShowData />}  />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App