import '../Styles/Food.css';
export default function Food({ info }) {
  return (
    <div
      id='FoodTR'
      class='max-w-sm rounded overflow-hidden shadow-lg border-double border-4 border-black-600 ...'
    >
      <img
        src={info.image}
        height='150'
        width='150'
        alt='food'
        className='FoodTable'
        class='w-full'
      />
      <h1 className='FoodTable' class='font-bold text-xl mb-2'>
        {info.name}
      </h1>
      <h3>
        Allergic?
        <input type='checkbox' id='allergic' className='FoodTable'></input>
      </h3>
      <h3>
        Favorite?
        <input type='checkbox' id='favorite' className='FoodTable'></input>
      </h3>
    </div>
  );
}
