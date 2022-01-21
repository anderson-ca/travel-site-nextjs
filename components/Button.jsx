import Link from 'next/link';
import buttonStyles from '../styles/Button.module.css';

// const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

// const SIZES = ['btn--medium', 'btn--large'];

// export const Button = ({
//     children,
//     // tytpe,
//     // onClick,
//     // buttonStyle,
//     // buttonSize
// }) => {

//     // const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
//     // const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

//     return (
//         <Link href='/sign-up' className='btn-mobile' passHref>
//             <button
//                 // className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//                 // onClick={onClick}
//                 // type={type}
//             >
//                 {children}
//             </button>
//         </Link>
//     );
// };

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

const Button = () => {
  return (
    <Link href='/' className='btn-mobile' passHref>
      <button>SIGN UP</button>
    </Link>
  );
};

export default Button;
