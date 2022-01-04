import React from 'react'
import "../styles/Navbar.css"
import { LoginBtn, LogoutBtn, AuthBtn } from './UserButtons'
import { useState } from 'react'

function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <nav className="navbar navbar-fixed navbar-expand-lg navbar-light "
            style={{
                backgroundColor: "#00D0FF"
            }}
            id="custom-nav">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">Navbar scroll</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                        style={{ "bs-scroll-height": "100px" }}
                    >
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Useless Stuff
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                <li><a className="dropdown-item" href="/#">About us</a></li>
                                <li><a className="dropdown-item" href="/#">Privacy Policy</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/#">Shipping Policy</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" >Link</a>
                        </li>
                    </ul>
                </div>
                <div className='nav-item'
                    style={{
                        position: 'absolute', left: '50%', top: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                    <form className="d-flex" action="/#" method="get">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search or jump to..." aria-label="Search" />
                        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>
                </div>
                <div>
                    {/* Create the Auth Button */}
                    <AuthBtn isLoggedIn={isLoggedIn} />
                </div>


            </div>
        </nav>
    )
}

export default Navbar
