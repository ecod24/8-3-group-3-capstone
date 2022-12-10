import React from "react";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { context } from "../AuthContext";

const API = process.env.REACT_APP_API_URL;
//id 2 likes id 3, and vice versa so they are matching
export default function Matches() {
  const user = useContext(context);
  //   console.log("Context in MATCHES:", user);
  const [isMatched, setIsMatched] = useState(false);
  useEffect(() => {
    if (!user) return;
    axios
      .get(`${API}/likes/mutual?user1=${user.id}&user2=${3}`)
      .then((response) => {
        console.log("RESPONSE:", response);
      });
  }, []);

  //loop through array of user, make an axios call for /mutuals
  return <div>Matches hello</div>;
}
