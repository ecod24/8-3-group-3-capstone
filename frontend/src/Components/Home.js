import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import User from './User';

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
