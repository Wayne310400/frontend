import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../App.css'
import { Link } from 'react-router-dom'

export default function Statistics(){

        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={'/sign-in'}>
                PPFHIR
                </Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to={'/Home'}>
                        Home
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={'/showdata'}>
                        Show Data
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to={'/statistics'}>
                        Statistics
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        );

}