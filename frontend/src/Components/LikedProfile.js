export default function LikedProfile({ info }) {
  return (
    <div
      id='UserDiv'
      className='max-w-sm rounded overflow-hidden shadow-lg border-double border-4 border-red-600 ...'
    >
      <img
        id='UserImage'
        className='w-full'
        src={info.image}
        alt={'user profile pic'}
      />
      <div id='UserInnerDiv'>
        <h1 id='UserName' className='text-center font-bold text-2xl mb-5'>
          {info.name}, {info.age}
        </h1>
        {/* <h1 id="UserEmail" class="text-gray-700 text-base">
            Email: {info.email}
          </h1> */}
        <h1 id='UserGender' className='text-black-700 text-base'>
          {info.sexual_orientation}, {info.gender}
        </h1>

        <h1 id='FoodPreference' className='text-black-700 text-base'>
          My Fav Foods: {info.food_preferences}
        </h1>

        <h1 id='UserChat' className='text-black-700 text-base'>
          {' '}
          Connect With Me! <span>{info.chat_handle}</span>
        </h1>
      </div>
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
    </div>
  );
}
