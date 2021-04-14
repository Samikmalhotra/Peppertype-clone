import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="links">
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <Link className="navbar-brand" to="Footer"><img alt='' className="navbar-img" src="https://uploads-ssl.webflow.com/6036972e08af561b470b4831/6036972e08af5646010b483b_Peppertype.ai%20Logo%20-%20White.png"/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="nav navbar-nav ml-auto d-flex;">
                    <li className="nav-item d-flex">
                    <Link className="nav-link " to="#">Pricing</Link>
                    </li>
                    <li className="nav-item">
                    <button className="login"><Link className="nav-link" to="#">Login</Link></button>
                    </li>
                    <li className="nav-item">
                    <button className="register"><Link className="nav-link " to="#">Sign Up for Free →</Link></button>
                    </li>
                </ul>
                
                </div>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;
