import UserProfile from '../Components/UserProfile.js';
import Checklist from '../Components/Checklist.js';
import { Link } from 'react-router-dom';

export default function UserPage() {
  return (
    <section>
      <Checklist />
      <UserProfile />
      <Link to='/'>
        <button className='backbutton bg-rose-500 text-white font-bold py-4 px-20 rounded-full'>
          Back to Home Page
        </button>
      </Link>
    </section>
  );
}
