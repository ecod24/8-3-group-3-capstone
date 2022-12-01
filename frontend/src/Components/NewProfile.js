import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Styles/NewProfile.css';

const URL = process.env.REACT_APP_API_URL;

export default function NewProfile() {
  let navigate = useNavigate();
  const [profile, createUser] = useState({
    name: '',
    image: '',
    email: '',
    age: 0,
    dietary_restrictions: '',
    food_preferences: '',
    sexual_orientation: '',
    gender: '',
    religion: '',
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
    createUser({ ...profile, [event.target.id]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    newUser(profile);
  };

  return (
    <>
      <h1 id='FormBlurb'>Make A New User Profile</h1>
      <div className='NewUserDiv'>
        <form onSubmit={handleSubmit} className='NewUserForm'>
          <label htmlFor='name'>New User Name:</label>
          <input
            id='name'
            className='NewUserForm'
            type='text'
            value={profile.name}
            onChange={handleTextChange}
            placeholder='Enter Your Name'
            required
          />
          <label htmlFor='image'>File Name for User Pic</label>
          <input
            id='image'
            className='NewUserForm'
            type='text'
            value={profile.image}
            onChange={handleTextChange}
            placeholder='File Name for Profile Pic'
            required
          />
          <label htmlFor='email'>New User Email:</label>
          <input
            id='email'
            className='NewUserForm'
            type='text'
            value={profile.email}
            onChange={handleTextChange}
            placeholder='Enter Your Email'
          />
          <label htmlFor='age'>New User Age:</label>
          <input
            id='age'
            className='NewUserForm'
            type='number'
            value={profile.age}
            onChange={handleTextChange}
            placeholder='Enter Your Age'
          />

          <label htmlFor='Dietary Restrictions'>Dietary Restrictions:</label>
          <textarea
            id='Dietary Restrictions'
            className='NewUserForm'
            rows='3'
            cols='30'
            placeholder="Enter your allergies and food restrictions, each one seperated by a
            ','."
          ></textarea>

          <label htmlFor='Food Restrictions'>Preferred Foods:</label>
          <textarea
            id='Food Restrictions'
            className='NewUserForm'
            rows='3'
            cols='30'
            placeholder="Enter your favorite foods, each one seperated by a ','."
          ></textarea>
          <label htmlFor='sexual_orientation'>
            New User Sexual Orientation:
          </label>
          <input
            id='sexual_orientation'
            className='NewUserForm'
            type='text'
            value={profile.sexual_orientation}
            onChange={handleTextChange}
            placeholder='Enter Your Sexual Orientation'
          />
          <label htmlFor='gender'>Gender:</label>
          <input
            id='gender'
            className='NewUserForm'
            type='text'
            value={profile.gender}
            onChange={handleTextChange}
            placeholder='Enter Your Gender'
          />
          <label htmlFor='religion'>About You:</label>
          <textarea
            id='religion'
            className='NewUserForm'
            type='religion'
            rows='3'
            cols='30'
            value={profile.religion}
            onChange={handleTextChange}
            placeholder='Tell Us About Yourself.'
          />
          <div id='buttonDiv'>
            <input type='submit' id='submit' value='Submit' />

            <br />
            <Link to={'/'}>
              <button id='newUserSubmitBack'>Back</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
