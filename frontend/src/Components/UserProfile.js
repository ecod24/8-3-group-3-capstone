import axios from 'axios';
import '../Styles/UserProfile.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import User from './User';
import '../Styles/UserProfiles.css';
import LikedPush from './LikedPush';

export default function UserProfile({ currentFilter, users, user }) {
  return (
    <div className='UserGallery bg-beige'>
      {users
        .filter((u) => {
          if (!currentFilter) {
            return true;
          } else {
            return u.dietary_restrictions.includes(currentFilter);
          }
        })
        .map((u) => {
          return <User info={u} key={`${u.id}-${u.name}`} signedInUser={user} />;
        })}
    </div>
  );
}
