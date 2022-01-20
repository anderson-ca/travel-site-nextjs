import navbarStyles from '../styles/Navbar.module.css';
import Link from 'next/link';

import { FaTypo3 } from 'react-icons/fa';

const Navbar = () => {
  return (
      <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link href='/' passHref>
                    <span>
                        TRVL
                        <FaTypo3 />
                    </span>
                </Link>
            </div>
        </nav>
      </>
  );
};

export default Navbar;
