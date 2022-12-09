import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../Styles/Edit.css';
import { context } from '../AuthContext';

const API = process.env.REACT_APP_API_URL;

export default function EditProfile() {
  const user = useContext(context);
  const { id } = useParams();
  console.log('User Context:', user);
  const navigate = useNavigate();
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
  useEffect(() => {
    axios
      .get(`${API}/users/${id}`)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  const handleChange = (event) => {
    setProfile({
      ...profile,
      [event.target.id.toLowerCase()]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/users/${id}`, profile)
      .then((response) => {
        navigate(`/users`); //somewhere else?
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {!!user ? (
        <div>
          {' '}
          <h1
            id='FormBlurb'
            className='font-fonts text-rose-700 text-5xl font-semibold content-center'
          >
            Edit Your Profile
          </h1>
          <div id='EditDiv'>
            <form onSubmit={handleSubmit} id='EditUserForm'>
              <label
                id='NameLabel'
                className='font-fonts text-3xl  text-rose-700'
              >
                Name:
              </label>
              <input
                id='name'
                type='text'
                className='text-sm font-semibold inline-block py-4 px-2  text-black last:mr-0 mr-1'
                name='name'
                onChange={handleChange}
                value={profile.name}
                placeholder='Enter Your Name'
                required
              />

              <label
                id='ImageLabel'
                className='font-fonts text-3xl  text-rose-700'
              >
                Picture:
              </label>
              <input
                id='image'
                type='text'
                className='text-sm font-semibold inline-block py-4 px-2    text-black bg-pink-200 last:mr-0 mr-1'
                name='image'
                placeholder='https://.......jpg'
                onChange={handleChange}
                value={profile.image}
                required
              />
              <label
                id='EmailLabel'
                className='font-fonts text-3xl  text-rose-700'
              >
                Email:
              </label>
              <input
                id='email'
                type='text'
                className='emails text-sm font-semibold inline-block py-4 px-2    text-black bg-pink-200 last:mr-0 mr-1'
                name='email'
                onChange={handleChange}
                value={profile.email}
                placeholder='Enter Your Email'
              />
              <label
                id='AgeLabel'
                className='font-fonts text-3xl  text-rose-700'
              >
                Age:
              </label>
              <input
                id='age'
                type='number'
                className='text-sm font-semibold inline-block py-4 px-2    text-black bg-pink-200 last:mr-0 mr-1'
                name='age'
                onChange={handleChange}
                value={profile.age}
              />
              <label
                id='DietLabel'
                className='font-fonts text-3xl  text-rose-700'
              >
                Dietary Restrictions:
              </label>
              <input
                id='Dietary_Restrictions'
                type='text'
                className='text-sm font-semibold    text-black'
                name='dietary_restrictions'
                placeholder='Remember to keep each Restriction comma separated!'
                onChange={handleChange}
                value={profile.dietary_restrictions}
              />
              <label
                id='FoodLabel'
                className='font-fonts text-3xl  text-rose-700'
              >
                Favorite Foods:
              </label>
              <textarea
                id='food_preferences'
                type='text'
                className='text-sm  inline-block py-4 px-2  last:mr-0 mr-1  text-black resize-x-10'
                name='food_preferences'
                rows='3'
                cols='30'
                placeholder="Enter your favorite foods, each one seperated by a ','."
                onChange={handleChange}
                value={profile.food_preferences}
              />

              <label
                id='SexLabel'
                className='font-fonts text-3xl  text-rose-700'
              >
                Sexual Orientation:
              </label>
              <input
                id='sexual_orientation'
                type='text'
                className='text-sm inline-block py-4 px-2  font-semibold  text-black last:mr-0 mr-1'
                name='sexual_orientation'
                onChange={handleChange}
                value={profile.sexual_orientation}
                placeholder='Enter Your Sexual Orientation'
              />

              <label
                id='GenderLabel'
                className='font-fonts text-3xl  text-rose-700'
              >
                Gender:
              </label>
              <input
                id='gender'
                type='text'
                className='text-sm font-semibold inline-block py-4 px-2    text-black bg-pink-200 last:mr-0 mr-1'
                name='gender'
                onChange={handleChange}
                value={profile.gender}
                placeholder='Enter Your Gender'
              />

              <label
                id='AboutLabel'
                className='font-fonts text-3xl  text-rose-700'
              >
                About You:
              </label>
              <textarea
                id='about_me'
                type='textarea'
                className='text-sm font-semibold inline-block py-4 px-2  last:mr-0 mr-1 text-black'
                rows='3'
                cols='30'
                name='about_me'
                onChange={handleChange}
                value={profile.about_me}
                placeholder='Tell Us About Yourself.'
              />

              <label
                id='ChatLabel'
                className='font-fonts text-3xl  text-rose-700'
              >
                Chat Handle
              </label>
              <input
                id='chat_handle'
                type='text'
                className='text-sm font-semibold inline-block py-4 px-2    bg-pink-200 last:mr-0 mr-1'
                name='chat_handle'
                placeholder='Add your handle from a chat system like Messenger, WhatsApp, Kik... etc'
                onChange={handleChange}
                value={profile.chat_handle}
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
      ) : (
        <h1>You are not logged in.</h1>
      )}
    </div>
  );
}
