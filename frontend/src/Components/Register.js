import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import app from '../Firebase';
import './Register.css';

export default function Register() {
  const navigate = useNavigate();
  //   const [user, setUser] = useState({
  //     name: "",
  //     image: "",
  //     email: "",
  //     age: 0,
  //     dietary_restrictions: "",
  //     food_preferences: "",
  //     sexual_orientation: "",
  //     gender: "",
  //     religion: "",
  //   });

  const [userProfile, setUserProfile] = useState({
    email: '',
    password: '',
  });
  //using credentials (app) to make auth object
  const auth = getAuth(app);

  const handleTextChange = (event) => {
    setUserProfile({ ...userProfile, [event.target.id]: event.target.value });
  };

  const signUp = () => {
    createUserWithEmailAndPassword(
      auth,
      userProfile.email,
      userProfile.password,
    )
      .then((userCredential) => {
        const user = userCredential.user; //creates user
        if (user) {
          alert(`${userProfile.email} successfully registered`);
          navigate('/users/new'); //TODO: somehow send here with email prefilled
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(
          `${errorCode} ${userProfile.email} could not register. Please input a valid email or password.`,
        );
      });
  };
  // axios
  //   .post(`${API}/myfoods`, food)
  //   .then((res) => {
  //     navigate(`/myfoods`);
  //   })
  //   .catch((err) => {
  //     console.warn(err);
  //   });

  return (
    <div className='register'>
      <p className='font-fonts text-7xl font-semibold text-rose-700'>
        Sign Up Here!
      </p>
      <p className='font-fonts text-3xl font-semibold text-rose-700'>
        Start finding your match!
      </p>
      <br></br>
      <input
        className='text-sm font-semibold inline-block py-4 px-5 rounded-full text-pink-600 bg-pink-200 last:mr-0 mr-1'
        type='text'
        id='email'
        placeholder='Email'
        onChange={handleTextChange}
      />
      <br></br>
      <input
        className='text-sm font-semibold inline-block py-4 px-5 rounded-full text-pink-600 bg-pink-200 last:mr-0 mr-1'
        placeholder='Password'
        type='password'
        id='password'
        onChange={handleTextChange}
      />
      <br></br>
      <button
        onClick={signUp}
        className='registerbutton bg-rose-500 text-white font-bold py-4 px-20 rounded-full'
      >
        Register
      </button>
      <p className='content-center'>
        Already have an account?{' '}
        <Link className='underline' to='/signin'>
          click here!
        </Link>
      </p>
      <Link to='/'>
        <button className='backbutton bg-rose-500 text-white font-bold py-4 px-20 rounded-full'>
          Back to Home Page
        </button>
      </Link>
      <div className='copyright'>
        <div className='copyrightdiv font-fonts text-sm font-semibold text-rose-700 '>
          Copyright © 2022 Table For Two
        </div>
      </div>
    </div>
  );
}
