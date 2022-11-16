//Treating user image as a string since there are no images.
export default function User({ info }) {
  return (
    <div>
      <h1>{info.name}</h1>
      <h1>{info.image}</h1>
    </div>
  );
}
