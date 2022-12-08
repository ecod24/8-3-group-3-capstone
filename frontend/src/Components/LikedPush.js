import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function LikedPush({ likes }) {
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
