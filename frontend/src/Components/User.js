//Treating user image as a string since there are no images.
export default function User({ info }) {
  return (
    <div id='UserDiv'>
      <h1 id='UserImage'>{info.image}</h1>
      <div id='UserInnerDiv'>
        <h1 id='UserName'>Name: {info.name}</h1>
        <h1 id='UserEmail'>Email: {info.email}</h1>
        <h1 id='UserAge'>Age: {info.age}</h1>
        <h1 id='UserGender'>Gender: {info.gender}</h1>
        <h1 id='UserSexOrient'>
          Sexual Orientation: {info.sexual_orientation}
        </h1>
      </div>
    </div>
  );
}
