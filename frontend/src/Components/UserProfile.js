import axios from "axios";
import "../Styles/UserProfile.css";
import { useState, useEffect } from "react";
import User from "./User";
import "../Styles/Home.css";

export default function UserProfile() {
  const URL = process.env.REACT_APP_API_URL;
  const [users, getAllUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/users`)
      .then((res) => getAllUsers(res.data.payload))
      .catch((err) => console.log(err.message.payload));
  }, [URL]);
  return (
    <div className="LandingDiv">
      {users.map((user) => {
        return <User info={user} key={user.name} />;
      })}
    </div>
  );

}
