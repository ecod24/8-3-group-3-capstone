import axios from 'axios';
import { useState, useEffect } from 'react';

/*export default function LikedPush({ likes }) {
  const URL = process.env.REACT_APP_API_URL;
  const [aLike, Likes] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/likes/${id}`)
      .then((res) => Likes(res.data.payload))
      .catch((err) => console.warn(err.message.payload));
  }, [URL]);
  if (likes.liked_id !== likes.id) {
    likes.liked_id.push(likes.id);
  } else {
    console.log('You already liked this person.');
  }
} */
