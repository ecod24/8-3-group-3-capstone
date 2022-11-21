import { Link } from 'react-router-dom';
import '../Styles/NavBar.css';

export default function NavBar() {
  return (
    <nav className='T4TNavbar'>
      <Link to={`/`}>
        <img
          src={require('../Assets/TableForTwoLogo.png')}
          alt='Logo For Table For Two'
          height='144px'
          width='200px'
        />{' '}
      </Link>
      <Link to={`/users`}>
        <h1 className='NavText'> Profile</h1>
      </Link>
      <Link to={`/users`}>
        <h1 className='NavText'> Sign Up/Login</h1>
      </Link>
      <Link>
        <h1 className='NavText'>Contact Us</h1>
      </Link>
    </nav>
  );
}
