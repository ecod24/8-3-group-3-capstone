//Treating signedInUser image as a string since there are no images.
//Merge Text
import { Link } from "react-router-dom";
import LikedPush from "./LikedPush";
import { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function User({ info, signedInUser }) {
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    if (!signedInUser) return;
    axios.get(`${API}/likes/matches?liked_id=${info.id}`).then((response) => {
      if (
        response.data.payload.find(
          (liker) => liker.liker_id === signedInUser.id
        )
      ) {
        setIsLiked(true);
      } else setIsLiked(false);
    });
  }, [signedInUser]);
  return (
    <div
      id="UserDiv"
      className="max-w-sm rounded overflow-hidden shadow-lg border-red"
    >
      <Link className="profileImage border-red" to={`/users/${info.id}`}>
        <div className="flex flex-col items-center">
          <img
            id="UserImage"
            className="w-full rounded-3xl border-logored "
            src={info.image}
            alt={"signedInUser profile pic"}
          />
        </div>
      </Link>
      <div id="UserInnerDiv">
        <h1
          id="UserName"
          className="text-center font-bold text-2xl mb-5 font-fonts text-red"
        >
          {info.name}, {info.age}
        </h1>
        {/* <h1 id="UserEmail" class="text-gray-700 text-base">
          Email: {info.email}
        </h1> */}
        <h1 id="UserGender" className="text-center text-red text-xl font-fonts">
          {info.sexual_orientation}, {info.gender}
        </h1>
        <h1
          id="FoodPreference"
          className="text-red font-fonts text-center text-lg mt-2em "
        >
          Fav Foods: {info.food_preferences}
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <button className="LikeButton">
          <img
            src={
              isLiked
                ? require("../Assets/jigsaw.png")
                : require("../Assets/jigsaw_empty.png")
            }
            alt="Like"
            onClick={() => {
              if (isLiked) {
                axios
                  .delete(`${API}/likes/${signedInUser.id}/${info.id}`)
                  .then(() => {
                    setIsLiked(false);
                  });
              } else {
                axios
                  .post(`${API}/likes`, {
                    liker_id: signedInUser.id,
                    liked_id: info.id,
                  })
                  .then(() => {
                    setIsLiked(true);
                  });
              }
            }}
          />
        </button>
      </div>
    </div>
  );
}
