//Treating user image as a string since there are no images.
export default function User({ info }) {
  return (
    <div
      id="UserDiv"
      className="max-w-sm rounded overflow-hidden shadow-lg border-double border-4 border-black-600 ..."
    >
      <img
        id="UserImage"
        className="w-full"
        src={info.image}
        alt={"user profile pic"}
      />
      <div id="UserInnerDiv">
        <h1 id="UserName" className="text-center font-bold text-2xl mb-5">
          {info.name}, {info.age}
        </h1>
        {/* <h1 id="UserEmail" class="text-gray-700 text-base">
          Email: {info.email}
        </h1> */}
        <h1 id="UserGender" className="text-gray-700 text-base">
          Gender: {info.gender}
        </h1>
        <h1 id="FoodPreference" className="text-gray-700 text-base">
          Food Preferences: {info.food_preferences}
        </h1>
        <h1 id="UserSexOrient" className="text-gray-700 text-base">
          Sexual Orientation: {info.sexual_orientation}
        </h1>
      </div>
      <button className="mx-12">
        <img
          src={require("../Assets/icons8-cancel-96.png")}
          alt="Skip"
          onClick={() => {
            console.log("I was clicked");
          }}
        />
      </button>
      <button className="icons">
        <img
          src={require("../Assets/icons8-heart-suit-96.png")}
          alt="Like"
          onClick={() => {
            console.log("I was clicked");
          }}
        />
      </button>
    </div>
  );
}
