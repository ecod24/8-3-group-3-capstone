import { Link } from 'react-router-dom';
import '../Styles/NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <div className='T4TNavbar'>
        <img
          src={require('../Assets/TableForTwoLogo.png')}
          alt='Logo For Table For Two'
          height='140px'
          width='200px'
        />
        <h1 className='NavText'> Login/Sign Up</h1>
        <h1 className='NavText'>Profile</h1>
      </div>
    </nav>
  );
}
