import UserProfile from '../Components/UserProfile.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Group from './Group';
import { Link } from 'react-router-dom';
import { months, calcButtonTextColor } from '../Tools';
import axios from 'axios';

export default function EditableUserProfile() {
  const URL = process.env.REACT_APP_API_URL;
  const [info, getUser] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`${URL}/users/${id}`)
      .then((res) => getUser(res.data.payload))
      .catch((err) => console.log(err.message.payload));
  }, [URL, id]);

  console.log();

  return (
    <div>
      <div className='flex flex-col md:flex-row  overflow-hidden shadow-lg border-double border-4 border-black-600 ...'>
        <div class='h-240 w-auto md:w-1/2'>
          <img
            class='inset-0 h-240 w-full object-cover object-center border-dashed border-2 border-black-600 ... '
            src={info.image}
          />
        </div>
        <div className='w-full py-4 px-6 text-gray-800 flex flex-col justify-between'>
          <Group>
            <h2 className='font-semibold  text-lg leading-tight truncate '>
              Name:
            </h2>{' '}
            {info.name}
          </Group>
          <br />
          <Group>
            <h2 className='font-semibold text-lg leading-tight truncate'>
              Email:
            </h2>{' '}
            {info.email}
          </Group>
          <br />
          <Group>
            <h2 className='font-semibold text-lg leading-tight truncate'>
              Age:
            </h2>{' '}
            {info.age}
          </Group>
          <br />
          <Group>
            <h2 className='font-semibold text-lg leading-tight truncate'>
              Gender:
            </h2>{' '}
            {info.gender}
          </Group>
          <br />
          <Group>
            <h2 className='font-semibold text-lg leading-tight truncate'>
              My Preffered Foods:
            </h2>{' '}
            {info.food_preferences}
          </Group>
          <br />
          <Group>
            <h2 className='font-semibold text-lg leading-tight truncate'>
              My Eating Habits:
            </h2>
            {info.dietary_restrictions}
          </Group>
          <br />
          <Group>
            <h2 className='font-semibold text-lg leading-tight truncate'>
              About Myself:
            </h2>{' '}
            {info.about_me}
          </Group>
          <Group>
            <br />
            <Link to={`/users/${info.id}/edit`}>
              <button
                class='border-solid py-2 px-2 border-2 bg-white border-black-600 ...'
                // onClick={startEditCallback}
              >
                Edit
              </button>
            </Link>
          </Group>
        </div>
      </div>
      <Link to='/users'>
        <button className='backbutton bg-rose-500 text-white font-bold py-4 px-20 rounded-full'>
          Back to User Gallery
        </button>
      </Link>
    </div>
  );
}
