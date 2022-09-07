import React, {useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenu] = useState(false);
    const menuSwap = () => setMenu(!menuOpen);
    return(
        <>
        <h2>The Navbar<i className="fa-solid fa-bars" /></h2>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                <i onClick={menuSwap}> {menuOpen ? (<i class="fa-solid fa-bars"></i>) : (<i class="fa-solid fa-bars-staggered"></i>)}</i>
                </Link>
            </div>
        </nav>
        
        </>
    )
}

export default Navbar;