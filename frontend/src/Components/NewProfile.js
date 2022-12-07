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
    dietary_restrictions: '',
    food_preferences: '',
    sexual_orientation: '',
    gender: '',
    about_me: '',
    chat_handle: '',
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
    <>
      <h1
        id="FormBlurb"
        className="font-fonts text-rose-700 text-5xl font-semibold content-center"
      >
        Make A New User Profile
      </h1>
      <div className="NewUserDiv">
        <form onSubmit={handleSubmit} className="NewUserForm">
          <label htmlFor="name">New User Name:</label>
          <input
            id="name"
            className="NewUserForm"
            type="text"
            value={profile.name}
            onChange={handleTextChange}
            placeholder="Enter Your Name"
            required
          />
          <label htmlFor="image">File Name for User Pic</label>
          <input
            id="image"
            className="NewUserForm"
            type="text"
            value={profile.image}
            onChange={handleTextChange}
            placeholder="https://.......jpg"
            required
          />
          <label htmlFor="email">New User Email:</label>
          <input
            id="email"
            className="NewUserForm"
            type="text"
            value={profile.email}
            onChange={handleTextChange}
            placeholder="Enter Your Email"
          />
          <label htmlFor="age">New User Age:</label>
          <input
            id="age"
            className="NewUserForm"
            type="number"
            value={profile.age}
            onChange={handleTextChange}
            placeholder="Enter Your Age"
          />

          <label htmlFor="Dietary Restrictions">Dietary Restrictions:</label>
          <textarea
            id="Dietary Restrictions"
            className="NewUserForm"
            rows="3"
            cols="30"
            placeholder="Enter your allergies and food restrictions, each one seperated by a
            ','."
          ></textarea>

          <label htmlFor="Food Restrictions">Preferred Foods:</label>
          <textarea
            id="Food Restrictions"
            className="NewUserForm"
            rows="3"
            cols="30"
            placeholder="Enter your favorite foods, each one seperated by a ','."
          ></textarea>
          <label htmlFor="sexual_orientation">
            New User Sexual Orientation:
          </label>
          <input
            id="sexual_orientation"
            className="NewUserForm"
            type="text"
            value={profile.sexual_orientation}
            onChange={handleTextChange}
            placeholder="Enter Your Sexual Orientation"
          />
          <label htmlFor="gender">Gender:</label>
          <input
            id="gender"
            className="NewUserForm"
            type="text"
            value={profile.gender}
            onChange={handleTextChange}
            placeholder="Enter Your Gender"
          />
          <label htmlFor="about_me">About You:</label>
          <textarea
            id="about_me"
            className="NewUserForm"
            type="about_me"
            rows="3"
            cols="30"
            value={profile.about_me}
            onChange={handleTextChange}
            placeholder="Tell Us About Yourself."
          />
          <label htmlFor='chat_handle'>Chat Handle:</label>
          <input 
            id='chat_handle'
            className='NewUserForm'
            type='text'
            value={profile.chat_handle}
            onChange={handleTextChange}
            placeholder='Add your handle from a chatting service like Messenger, WhatsApp, Kik... etc'
          />
          <div id='buttonDiv'>
            <input type='submit' id='submit' value='Submit' />

            <br />
            <Link to={"/"}>
              <button id="newUserSubmitBack">Back</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
