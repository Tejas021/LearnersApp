import React from 'react'
import { Link } from 'react-router-dom'
// import LogoutIcon from '@mui/icons-material/Logout';



const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark bg-trans fixed-top" >
                <div className="container">
                    <Link className="navbar-brand" to="/"><h3>
                        <span className="text-warning">Yata</span>
                        <span className="text-light">gram</span>
                    </h3></Link>
                    <i type="button" className="me-auto fa fa-fw fa-search " data-bs-toggle="modal" data-bs-target="#exampleModal" ></i>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                                <Link className="nav-link active mx-3" to="/">Home</Link>
                            </li>
                            <li className="nav-item">

                                <Link className="nav-link active mx-3" to="/chat">Home</Link>
                            </li>
                            <li className="nav-item">

                                <Link className="nav-link active mx-3" to="/about">Home</Link>
                            </li>
                            <li className="nav-item">

                                <Link className="nav-link active mx-3" to="/events">logout</Link>
                            </li>

                        </ul> 

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
