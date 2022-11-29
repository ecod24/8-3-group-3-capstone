//Treating user image as a string since there are no images.
export default function User({ info }) {
  return (
    <div
      id='UserDiv'
      class='max-w-sm rounded overflow-hidden shadow-lg border-double border-4 border-black-600 ...'
    >
      <h1 id='UserImage' class='w-full'>
        {info.image}
      </h1>
      <div id='UserInnerDiv'>
        <h1 id='UserName' class='font-bold text-xl mb-2'>
          Name: {info.name}
        </h1>
        <h1 id='UserEmail' class='text-gray-700 text-base'>
          Email: {info.email}
        </h1>
        <h1 id='UserAge' class='text-gray-700 text-base'>
          Age: {info.age}
        </h1>
        <h1 id='UserGender' class='text-gray-700 text-base'>
          Gender: {info.gender}
        </h1>
        <h1 id='UserSexOrient' class='text-gray-700 text-base'>
          Sexual Orientation: {info.sexual_orientation}
        </h1>
      </div>
    </div>
  );
}
