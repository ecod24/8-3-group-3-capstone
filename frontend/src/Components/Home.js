import { Link } from 'react-router-dom';
import '../Styles/Home.css';

export default function Home() {
  return (
    <div className='LandingBlurb'>
      <h1 className='font-fonts text-rose-700 text-7xl font-semibold'>
        Table for Two
      </h1>
      <div class='flex flex-wrap justify-center'>
        <div class='w-1/12 sm:w-5/12 px-4 py-2'>
          <img
            src={require('../Assets/couple-eating-sweets-and-snacks-2472751.png')}
            alt='...'
            class='shadow-lg rounded-full max-w-full h-auto align-middle border-none py-2'
          />
        </div>
      </div>
      <p className='font-fonts text-3xl font-semibold text-rose-700'>
        Eating is a lifestyle
      </p>
      <p className='font-fonts text-3xl font-semibold text-rose-700'>
        Find a partner based on your diet!
      </p>
      <div>
        <br></br>
        <Link to='/register'>
          <button class='bg-rose-500 hover:bg-blue-700 text-white font-bold py-6 px-20 rounded-full'>
            Sign Up
          </button>
        </Link>
      </div>
      <br></br>
      <Link to='/signin'>
        <button class='bg-purple-900 hover:bg-blue-700 text-white font-bold py-6 px-20 rounded-full'>
          Sign In
        </button>
      </Link>
    </div>
  );
}
