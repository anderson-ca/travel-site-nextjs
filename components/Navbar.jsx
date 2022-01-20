import navbarStyles from '../styles/Navbar.module.css';
import Link from 'next/link';

import { useState } from 'react';
import { FaTypo3, FaTimes, FaBars } from 'react-icons/fa';
// click == <FaTimes /> ? setClick(<FaBars />) : setClick(<FaTimes />);
const Navbar = () => {
    const [click, setClick] = useState(<FaTimes />);

    const handleClick = () => click.type.name == 'FaTimes' ? setClick(<FaBars />) : setClick(<FaTimes />);


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
                        <p>
                            {click}
                        </p>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
