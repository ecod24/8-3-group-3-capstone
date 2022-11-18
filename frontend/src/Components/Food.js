import '../Styles/Food.css';
export default function Food({ info }) {
  return (
    <tr id='FoodTR'>
      <td>
        <input type='checkbox' id='allergic' className='FoodTable' />
      </td>
      <td>
        <input type='checkbox' id='favorite' className='FoodTable' />
      </td>
      <td>
        <h1 className='FoodTable'>{info.name}</h1>
      </td>
      <td>
        <img
          src={info.image}
          height='150'
          width='150'
          alt='image of food'
          className='FoodTable'
        />
      </td>
    </tr>
  );
}
