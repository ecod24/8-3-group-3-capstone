export default function Food({ info }) {
  return (
    <div>
      <input type='checkbox' id='allergic' />
      <input type='checkbox' id='favorite' />
      <h1>{info.name}</h1>
    </div>
  );
}
