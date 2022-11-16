import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='T4TNavbar'>
      <img
        src={require('../Assets/TableForTwoLogo.png')}
        alt='Logo For Table For Two'
        height='120px'
        width='200px'
      />
      <h1> This is the Navbar</h1>
    </nav>
  );
}
