import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../Styles/NewProfile.css";

const URL = process.env.REACT_APP_API_URL;

export default function NewProfile() {
  let navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "",
    image: "",
    email: "",
    age: 0,
    dietary_restrictions: "",
    food_preferences: "",
    sexual_orientation: "",
    gender: "",
    about_me: "",
  });

  const newUser = (profile) => {
    axios
      .post(`${URL}/users`, profile)
      .then(() => {
        navigate("/users");
      })
      .catch((error) => console.warn("catch", error));
  };

  const handleTextChange = (event) => {
    setProfile({ ...profile, [event.target.id]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    newUser(profile);
  };

  return (
    <div className="RegisterForm">
      <h1
        id="FormBlurb"
        className="font-fonts text-rose-700 text-5xl font-semibold content-center"
      >
        Make A New User Profile
      </h1>
      <div className="NewUserDiv">
        <form onSubmit={handleSubmit} className="NewUserForm">
          <label
            htmlFor="name"
            className="font-fonts text-3xl font-semibold text-rose-700"
          >
            Name{" "}
          </label>
          <input
            id="name"
            className="text-sm font-semibold inline-block py-4 px-4 rounded-full text-white last:mr-0 mr-1"
            type="text"
            value={profile.name}
            onChange={handleTextChange}
            placeholder="Enter Your Name"
            required
          />
          <label
            htmlFor="image"
            className="font-fonts text-3xl font-semibold text-rose-700"
          >
            Profile Picture{" "}
          </label>
          <input
            id="image"
            className="text-sm font-semibold inline-block py-4 px-4 rounded-full text-white bg-pink-200 last:mr-0 mr-1"
            type="text"
            value={profile.image}
            onChange={handleTextChange}
            placeholder="https://.......jpg"
            required
          />
          <label
            htmlFor="email"
            className="email font-fonts text-3xl font-semibold text-rose-700"
          >
            Email{" "}
          </label>
          <input
            id="email"
            className="emails text-sm font-semibold inline-block py-4 px-4 rounded-full text-white bg-pink-200 last:mr-0 mr-1"
            type="text"
            value={profile.email}
            onChange={handleTextChange}
            placeholder="Enter Your Email"
          />
          <label
            htmlFor="age"
            className="font-fonts text-3xl font-semibold text-rose-700"
          >
            Age{" "}
          </label>
          <input
            id="age"
            className="text-sm font-semibold inline-block py-4 px-4 rounded-full text-white bg-pink-200 last:mr-0 mr-1"
            type="number"
            value={profile.age}
            onChange={handleTextChange}
            placeholder="Enter Your Age"
          />

          <label
            htmlFor="Dietary Restrictions"
            className="font-fonts text-3xl font-semibold text-rose-700"
          >
            Dietary Restrictions{" "}
          </label>
          <textarea
            id="Dietary_Restrictions"
            className="text-sm font-semibold rounded-full text-white"
            rows="3"
            cols="30"
            placeholder="Enter your allergies and food restrictions, each one seperated by a
            ','."
          ></textarea>

          <label
            htmlFor="Food Restrictions"
            className="font-fonts text-3xl font-semibold text-rose-700"
          >
            Favorite Foods{" "}
          </label>
          <textarea
            id="Food_Restrictions"
            className="text-sm font-semibold rounded-full text-white resize-x-10"
            rows="3"
            cols="30"
            placeholder="Enter your favorite foods, each one seperated by a ','."
          ></textarea>
          <label
            htmlFor="sexual_orientation"
            className="font-fonts text-3xl font-semibold text-rose-700"
          >
            Sexual Orientation
          </label>
          <input
            id="sexual_orientation"
            className="text-sm font-semibold inline-block py-4 px-4 rounded-full text-white bg-pink-200 last:mr-0 mr-1"
            type="text"
            value={profile.sexual_orientation}
            onChange={handleTextChange}
            placeholder="Enter Your Sexual Orientation"
          />
          <label
            htmlFor="gender"
            className="font-fonts text-3xl font-semibold text-rose-700"
          >
            Gender{" "}
          </label>
          <input
            id="gender"
            className="text-sm font-semibold inline-block py-4 px-4 rounded-full text-white bg-pink-200 last:mr-0 mr-1"
            type="text"
            value={profile.gender}
            onChange={handleTextChange}
            placeholder="Enter Your Gender"
          />
          <label
            htmlFor="about_me"
            className="font-fonts text-3xl font-semibold text-rose-700"
          >
            About Me
          </label>
          <textarea
            id="about_me"
            className="text-sm font-semibold rounded-full text-white"
            type="about_me"
            rows="3"
            cols="30"
            value={profile.about_me}
            onChange={handleTextChange}
            placeholder="Tell Us About Yourself."
          />
          <br></br>
          <div id="buttonDiv">
            <input
              type="submit"
              id="submit"
              value="Submit"
              className="hover:cursor-pointer"
            />

            <br />
            <Link to={"/"}>
              <button id="newUserSubmitBack">Back</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
