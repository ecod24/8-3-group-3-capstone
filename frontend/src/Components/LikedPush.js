import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {context} from "../AuthContext";

export default function LikedPush({ likes }) {
  const user = useContext(context);
  /* let { id } = useParams();
  const URL = process.env.REACT_APP_API_URL;
  const [aLike, Likes] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/likes/${id}`)
      .then((res) => Likes(res.data.payload))
      .catch((err) => console.warn(err.message.payload));
  }, [URL]);    */
  /* --> Seperate Attempt
  let newLike = this.likes.map((alike) => {
    if (alike === likes.id) {
      likes.liked_id.push(likes.id);
    }
    return newLike;
  }); */
}
