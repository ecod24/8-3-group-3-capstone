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
      <div className='flex flex-col md:flex-row  overflow-hidden shadow-lg  border-double border-4 border-black-600 ...'>
        <div class='h-240 w-auto md:w-1/2'>
          <img
            class='inset-0 h-240 w-full object-cover object-center border-dashed border-2 border-black-600 ... '
            src={info.image}
          />
        </div>
        <div className='w-full py-4 px-6 text-gray-800 flex flex-col justify-between'>
          <Group>
            <h2 className='font-semibold  text-lg leading-tight truncate font-fonts text-red'>
              {info.name} , {info.age}
            </h2>{' '}
          </Group>
          <br />
          <Group>
            <h2 className='font-semibold text-lg leading-tight truncate font-fonts text-red'>
              {info.email}
            </h2>{' '}
          </Group>
          <br />

          <br />
          <Group>
            <h2 className='font-semibold text-lg leading-tight truncate font-fonts text-red'>
              {info.sexual_orientation}, {info.gender}
            </h2>{' '}
          </Group>
          <br />
          <Group>
            <h2 className='font-semibold text-lg leading-tight truncate font-fonts text-red'>
              {info.dietary_restrictions}
            </h2>
          </Group>
          <br />
          <Group>
            <h2 className='font-semibold text-lg leading-tight truncate font-fonts text-red'>
              My Fav Foods: {info.food_preferences}
            </h2>{' '}
          </Group>
          <br />

          <Group>
            <h2 className='font-semibold text-lg leading-tight truncate font-fonts text-red'>
              About Myself:
              <br />
              {info.about_me}
            </h2>{' '}
          </Group>
          <Group>
            <br />
            <div className='flex flex-col items-center'>
              <button className='LikeButton'>
                <img
                  src={require('../Assets/icons8-heart-suit-96.png')}
                  alt='Like'
                  onClick={() => {
                    console.log('I was clicked');
                  }}
                />
              </button>
            </div>
          </Group>
        </div>
      </div>
      <Link to='/users'>
        <button className='backbutton bg-rose-500 text-white font-bold py-4 px-20 rounded-full '>
          Back to User Gallery
        </button>
      </Link>
    </div>
  );
}
