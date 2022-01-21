import Button from '../components/Button';
import navbarStyles from '../styles/Navbar.module.css';
import Link from 'next/link';

import { useState } from 'react';
import { FaTypo3, FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [menuIcon, setMenuIcon] = useState(<FaTimes />);

    const handleClick = () => {
        (!click) ? setMenuIcon(<FaBars />) : setMenuIcon(<FaTimes />);
        setClick(!click)
    };

    const showButton = () => window.innerWidth <= 960 ? setButton(false) : setButton(true);

    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link href='/' className='navbar-logo' passHref>
                        <span>
                            TRVL
                            <FaTypo3 />
                        </span>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i>
                            {menuIcon}
                        </i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link href='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/service' className='nav-links' onClick={closeMobileMenu}>
                                Service
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/products' className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button />}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
