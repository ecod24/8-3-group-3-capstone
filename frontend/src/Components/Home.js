import { Link } from 'react-router-dom';

import '../Styles/Home.css';

export default function Home() {
  return (
    <div className='LandingDiv'>
      <Link className='LandingLink' to='/'>
        <h1>Welcome to Table for Two!</h1>
      </Link>
      <p>
        Designed for people who are looking for a deep connection with others
        over their mutual appreciation or allergies of select food(s).
      </p>
      <p>Time to make some reservations, Table for Two is just for you!</p>
    </div>
  );
}
