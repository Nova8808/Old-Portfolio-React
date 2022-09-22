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
            <i class="fa-solid fa-sun" />
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
                    <Link to="/Gamedev" className='nav-links' onClick={closeMobileMenu}>
                        Game Dev
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Dotnet" className='nav-links' onClick={closeMobileMenu}>
                        .NET
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Frontend" className='nav-links' onClick={closeMobileMenu}>
                        Frontend
                    </Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/Misc" className='nav-links' onClick={closeMobileMenu}>
                        Misc
                    </Link>
                    </li>
                    <li>
                <a
                    href='https://store.steampowered.com/app/2084260/Magefall/?beta=0'
                    className='nav-links-mobile'
                    onClick={closeMobileMenu}>
                    Buy Magefall on Steam
              </a>
            </li>
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
            </div>
        </nav>
        
        </>
    )
}

export default Navbar;