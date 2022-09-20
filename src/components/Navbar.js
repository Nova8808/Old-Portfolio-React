import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenu] = useState(false);
    const [button, setButton] = useState(true);

    const menuSwap = () => setMenu(!menuOpen);
    const closeMobileMenu = () => setMenu(false)

    const showButton = () => {
        let width = window.innerWidth;
        if (width <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
        console.log(button);
      };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return(
        <>
        {/* <h2>The Navbar<i className="fa-solid fa-bars" /></h2> */}
        <nav className="navbar">
            <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                <i className="fa-solid fa-bars" />
                Steve Serpe
                </Link>
                <div className="menu-icon" onClick={menuSwap}>
                <i className={menuOpen ? "fa-solid fa-bars-staggered" : "fa-solid fa-bars"} />
                </div>
                <ul className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Starrating" className='nav-links' onClick={closeMobileMenu}>
                        Basic React
                    </Link>
                    </li>
                    <li>
                <Link
                    to='/Starrating'
                    className='nav-links-mobile'
                    onClick={closeMobileMenu}>
                    Sign Up
              </Link>
            </li>
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
            </div>
        </nav>
        
        </>
    )
}

export default Navbar;