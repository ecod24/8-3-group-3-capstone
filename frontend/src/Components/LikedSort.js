import axios from 'axios';
import LikedProfile from './LikedProfile.js';
import { useState, useEffect } from 'react';

/*const likeStatus = (likes) => {
  const hasALiked = Object.values(likes.liker_id);
  if (likes.liker_id >= 1) {
    return true;
  } else {
    return false;
  }
}; */

export default function LikedSort() {
  const URL = process.env.REACT_APP_API_URL;
  const [likes, allLikes] = useState([]);
  useEffect(() => {
    axios
      .get(`${URL}/likes`)
      .then((res) => allLikes(res.data.payload))
      .catch((err) => console.warn(err.message.payload));
  }, [URL]);
}

return (
  <div className='LandingDiv'>
    {likes.map((like) => {
      return <LikedProfile info={like} key={`${user.id}-${user.name}`} />;
    })}
  </div>
);
