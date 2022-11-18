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
      <p>
        Designed for people who are looking for a deep connection with others
        over their mutual appreciation or allergies of select food(s).
      </p>
      <p>Time to make some reservations, Table for Two is just for you!</p>
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
