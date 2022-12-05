import axios from 'axios';
import '../Styles/UserProfile.css';
import { useState, useEffect } from 'react';
import User from './User';
import '../Styles/UserProfiles.css';

/**
 * capitalizes first letter and no trailing spaces in string given.
 * @param {string} word word to be normalized.
 * @returns string of normalized word
 */
const normalizeOneWord = (word) => {
  //trim spaces on outside first
  word = word.trim();
  word = word.split('');
  word[0] = word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    word[i] = word[i].toLowerCase();
  }
  return word.join('');
};

/**
 * normalizes a comma separated list of words
 * @param {string} words comma separarted string of words to be normalized
 */
const normalizeListOfWords = (words) => {
  // trim any edges of the string
  // split string into array of comma separated thingies
  return words
    .trim()
    .split(',')
    .map((word) => {
      return normalizeOneWord(word);
    })
    .join(', ')
    .trim();
  // call normalizeOneWord() on each entry
  // join normalized words in a comma separated string and return
};

export default function UserProfile() {
  const URL = process.env.REACT_APP_API_URL;
  const [users, setUsers] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('');
  let dietary_restrictions = []; //a list of unique dietary restrictions to filter by.
  const uniqueRestrictions = () => {
    //make a list of unique restrictions to filter by.
    users.forEach((user) => {
      let listOfRestrictions = normalizeListOfWords(user).split(',');
      listOfRestrictions.forEach((restriction) => {
        if (!dietary_restrictions.includes(restriction)) {
          dietary_restrictions.push(restriction);
        }
      });
    });
  };

  useEffect(() => {
    axios
      .get(`${URL}/users`)
      .then((res) => setUsers(res.data.payload))
      .catch((err) => console.warn(err.message.payload));
  }, [URL]);

  return (
    <div className='UserGallery'>
      {users.map((user) => {
        return <User info={user} key={`${user.id}-${user.name}`} />;
      })}
    </div>
  );
}
