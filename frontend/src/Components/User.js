//Treating user image as a string since there are no images.
import { Link } from 'react-router-dom';
import LikedPush from './LikedPush';

export default function User({ info }) {
  return (
    <div
      id='UserDiv'
      className='max-w-sm bg-beige rounded overflow-hidden  shadow-lg border-double border-4 border-black-600 ...'
    >
      <Link className='profileImage' to={`/users/${info.id}`}>
        <img
          id='UserImage'
          className='w-full'
          src={info.image}
          alt={'user profile pic'}
        />
      </Link>
      <div id='UserInnerDiv'>
        <h1 id='UserName' className='text-center font-bold text-2xl mb-5'>
          {info.name}, {info.age}
        </h1>
        {/* <h1 id="UserEmail" class="text-gray-700 text-base">
          Email: {info.email}
        </h1> */}
        <h1 id='UserGender' className='text-gray-700 text-base'>
          {info.sexual_orientation}, {info.gender}
        </h1>

        <h1 id='FoodPreference' className='text-gray-700 text-base'>
          Fav Foods: {info.food_preferences}
        </h1>
      </div>
      <div className='flex flex-col items-center'>
        <button className='LikeButton'>
          <img
            src={require('../Assets/icons8-heart-suit-96.png')}
            alt='Like'
            onClick={LikedPush}
          />
        </button>
      </div>
    </div>
  );
}
