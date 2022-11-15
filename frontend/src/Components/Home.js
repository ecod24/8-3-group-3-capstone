import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='LandingDiv'>
      <Link className='LandingLink' to='/'>
        <h1>Welcome to Table for Two!</h1>
      </Link>
    </div>
  );
}
