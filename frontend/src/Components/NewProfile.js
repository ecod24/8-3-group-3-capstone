import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Styles/NewProfile.css';

const URL = process.env.REACT_APP_API_URL;

export default function NewProfile() {
  let navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: '',
    image: '',
    email: '',
    age: 0,
    dietary_restrictions: '',
    food_preferences: '',
    sexual_orientation: '',
    gender: '',
    about_me: '',
    chat_handle: '',
  });

  const newUser = (profile) => {
    axios
      .post(`${URL}/users`, profile)
      .then(() => {
        navigate('/users');
      })
      .catch((error) => console.warn('catch', error));
  };

  const handleTextChange = (event) => {
    setProfile({ ...profile, [event.target.id]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    newUser(profile);
  };

  return (
    <div className='RegisterForm'>
      <h1
        id='FormBlurb'
        className='font-fonts text-rose-700 text-5xl font-semibold content-center'
      >
        Make A New User Profile
      </h1>
      <div className='NewUserDiv'>
        <form onSubmit={handleSubmit} className='NewUserForm'>
          <label
            id='NameLabel'
            htmlFor='name'
            className='font-fonts text-3xl  text-rose-700'
          >
            Name:{' '}
          </label>
          <input
            id='name'
            className='text-sm font-semibold inline-block py-4 px-2  text-black last:mr-0 mr-1'
            type='text'
            value={profile.name}
            onChange={handleTextChange}
            placeholder='Enter Your Name'
            required
          />
          <label
            id='ImageLabel'
            htmlFor='image'
            className='font-fonts text-3xl  text-rose-700'
          >
            Profile Picture:{' '}
          </label>
          <input
            id='image'
            className='text-sm font-semibold inline-block py-4 px-2    text-black bg-pink-200 last:mr-0 mr-1'
            type='text'
            value={profile.image}
            onChange={handleTextChange}
            placeholder='https://.......jpg'
            required
          />
          <label
            id='EmailLabel'
            htmlFor='email'
            className='email font-fonts text-3xl text-rose-700'
          >
            Email:{' '}
          </label>
          <input
            id='email'
            className='emails text-sm font-semibold inline-block py-4 px-2    text-black bg-pink-200 last:mr-0 mr-1'
            type='text'
            value={profile.email}
            onChange={handleTextChange}
            placeholder='Enter Your Email'
          />
          <label
            id='AgeLabel'
            htmlFor='age'
            className='font-fonts text-3xl  text-rose-700'
          >
            Age:{' '}
          </label>
          <input
            id='age'
            className='text-sm font-semibold inline-block py-4 px-2    text-black bg-pink-200 last:mr-0 mr-1'
            type='number'
            value={profile.age}
            onChange={handleTextChange}
            placeholder='Enter Your Age'
          />

          <label
            id='DietLabel'
            htmlFor='Dietary Restrictions'
            className='font-fonts text-3xl  text-rose-700 '
          >
            Dietary Restrictions:{' '}
          </label>
          <textarea
            id='Dietary_Restrictions'
            className='text-sm font-semibold    text-black'
            rows='3'
            cols='30'
            placeholder='Remember to keep each Restriction comma separated!'
          ></textarea>

          <label
            id='FoodLabel'
            htmlFor='Food Restrictions'
            className='font-fonts text-3xl  text-rose-700'
          >
            Favorite Foods:{' '}
          </label>
          <textarea
            id='Food_Restrictions'
            className='text-sm  text-black resize-x-10'
            rows='3'
            cols='30'
            placeholder="Enter your favorite foods, each one seperated by a ','."
          ></textarea>
          <label
            id='SexLabel'
            htmlFor='sexual_orientation'
            className='font-fonts text-3xl text-rose-700'
          >
            Sexual Orientation:
          </label>
          <input
            id='sexual_orientation'
            className='text-sm inline-block py-4 px-2    text-black bg-pink-200 last:mr-0 mr-1'
            type='text'
            value={profile.sexual_orientation}
            onChange={handleTextChange}
            placeholder='Enter Your Sexual Orientation'
          />
          <label
            id='GenderLabel'
            htmlFor='gender'
            className='font-fonts text-3xl text-rose-700'
          >
            Gender:{' '}
          </label>
          <input
            id='gender'
            className='text-sm font-semibold inline-block py-4 px-2    text-black bg-pink-200 last:mr-0 mr-1'
            type='text'
            value={profile.gender}
            onChange={handleTextChange}
            placeholder='Enter Your Gender'
          />
          <label
            id='AboutLabel'
            htmlFor='about_me'
            className='font-fonts text-3xl text-rose-700'
          >
            About You:
          </label>
          <textarea
            id='about_me'
            className='text-sm font-semibold    text-black'
            type='about_me'
            rows='3'
            cols='30'
            value={profile.about_me}
            onChange={handleTextChange}
            placeholder='Tell Us About Yourself.'
          />
          <label
            id='ChatLabel'
            htmlFor='chat_handle'
            className='font-fonts text-3xl text-rose-700'
          >
            Chat Handle:{' '}
          </label>
          <input
            id='chat_handle'
            className='NewUserForm text-sm font-semibold inline-block py-4 px-2    bg-pink-200 last:mr-0 mr-1'
            type='text'
            value={profile.chat_handle}
            onChange={handleTextChange}
            placeholder='Add your handle from a chatting service like Messenger, WhatsApp, Kik... etc'
          />
          <div id='buttonDiv'>
            <Link to='/'>
              <img alt='Back' src={require('../Assets/previous.png')} />
            </Link>
          </div>
          <div id='buttonDiv'>
            <button className='hover:cursor-pointer bg-purple-900 hover:bg-blue-700  font-bold py-15 px-10 rounded-full text-white font-bold space-y-4'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
