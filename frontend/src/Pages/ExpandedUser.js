import UserProfile from "../Components/UserProfile.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Group from "./Group";
import { Link } from "react-router-dom";
import { months, calcButtonTextColor } from "../Tools";
import axios from "axios";

export default function EditableUserProfile() {
  const URL = process.env.REACT_APP_API_URL;
  const [info, getUser] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`${URL}/users/${id}`)
      .then((res) => getUser(res.data.payload))
      .catch((err) => console.log(err.message.payload));
  }, [URL, id]);

  return (
    <div className="min-h-screen">
      <div className="flex flex-col md:flex-row  overflow-hidden shadow-lg border-double border-4 border-black-600 ...">
        <div class="h-240 w-auto md:w-1/2 rounded-lg">
          <img
            class="inset-0 h-240 w-full object-cover object-center border-solid border-2 border-black-600 rounded-full border-logored ... "
            src={info.image}
          />
        </div>
        <div className="w-full py-4 px-6 text-gray-800 inline-block p-0">
          <h2 className="font-fonts text-5xl leading-tight truncate text-red">
            {info.name}, {info.age}
          </h2>{" "}
          <br />
          {/* <Group>
            <h2 className="font-semibold text-lg leading-tight truncate font-fonts text-red">
              {info.email}
            </h2>{" "}
          </Group>
          <br /> */}
          <br />
          <img src={require("../Assets/group.png")} alt="gender" />
          <h2 className="font-fonts text-2xl leading-tight truncate text-red">
            {info.sexual_orientation}, {info.gender}
          </h2>{" "}
          <br />
          <img src={require("../Assets/diet.png")} alt="diet" />
          <h2 className="font-fonts text-2xl leading-tight truncate text-red">
            {info.dietary_restrictions}
          </h2>
          <br />
          <img src={require("../Assets/rating.png")} alt="favoritefood" />
          <h2 className="font-fonts text-2xl leading-tight truncate text-red">
            {info.food_preferences}
          </h2>{" "}
          <br />
          <div className="flex flex-col items-center text-3xl  text-red">
            <img
              src={require("../Assets/id-card.png")}
              className="max-h-24"
              alt="Name"
            />
            About Me
          </div>
          <div className="text-2xl font-fonts text-red">
            <br></br>
            {info.about_me}
          </div>
        </div>
        <h2 className="font-semibold text-lg leading-tight font-fonts text-red inline-block"></h2>{" "}
        <br />
        <div className="flex flex-col items-center">
          {/* <button className="LikeButton">
                <img
                  src={require("../Assets/icons8-heart-suit-96.png")}
                  alt="Like"
                  onClick={() => {
                    console.log("I was clicked");
                  }}
                />
              </button> */}
        </div>
      </div>
      <Link to="/users">
        <img src={require("../Assets/previous.png")} alt="Back" />
      </Link>
    </div>
  );
}
