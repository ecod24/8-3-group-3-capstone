import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import User from './User';
import '../Styles/Home.css';

export default function Home() {
  const URL = process.env.REACT_APP_API_URL;
  const [users, getAllUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/users`)
      .then((res) => getAllUsers(res.data.payload))
      .catch((err) => console.log(err.message.payload));
  }, [URL]);
  return (
    <div className='LandingDiv'>
      <Link className='LandingLink' to='/'>
        <h1>Welcome to Table for Two!</h1>
      </Link>
      <div className='LandingBlurbDiv'>
        <p>
          {' '}
          This site is designed to connect people together through their
          appreciation or inability to eat certain foods
        </p>
        <p>
          {' '}
          Ever wanted to connect with someone who shares a mutual love for
          eating pasta? Or perhaps a mutual allergy to shellfish? Time to make a
          reservation cause Table For Two is just for you!
        </p>
      </div>
      <table>
        <tbody>
          {users.map((user) => {
            return <User key={user.name} info={user} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
