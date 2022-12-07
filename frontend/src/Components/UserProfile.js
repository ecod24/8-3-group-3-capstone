import axios from 'axios';
import '../Styles/UserProfile.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import User from './User';
import '../Styles/UserProfiles.css';


export default function UserProfile({currentFilter, users}) {
	return (
		<div className="UserGallery">
			{users
				.filter((user) => {
					if (!currentFilter) {
						return true;
					} else {
						return user.dietary_restrictions.includes(currentFilter);
					}
				})
				.map((user) => {
					return <User info={user} key={`${user.id}-${user.name}`} />;
				})}
		</div>
	);
}
