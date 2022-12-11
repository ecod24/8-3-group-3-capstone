import UserProfile from "../Components/UserProfile.js";
import Checklist from "../Components/Checklist.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { context } from "../AuthContext";

/**
 * capitalizes first letter and no trailing spaces in string given.
 * @param {string} word word to be normalized.
 * @returns string of normalized word
 */
const normalizeOneEntry = (word) => {
  //trim spaces on outside first
  word = word.trim();
  word = word.split("");
  word[0] = word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    word[i] = word[i].toLowerCase();
  }
  return word.join("");
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
    .split(",")
    .map((word) => {
      return normalizeOneEntry(word);
    })
    .join(", ")
    .trim();
  // call normalizeOneEntry() on each entry
  // join normalized words in a comma separated string and return
};

export default function UserPage({ user }) {
  const [currentFilter, setCurrentFilter] = useState("");
  const URL = process.env.REACT_APP_API_URL;
  const [users, setUsers] = useState([]);
  const [dietaryRestrictions, setDietaryResctrions] = useState([]);

  //let dietary_restrictions = ["Vegan", "Kosher"]; //a list of unique dietary restrictions to filter by.
  // const uniqueRestrictions = () => {
  // 	//make a list of unique restrictions to filter by.
  // };

  useEffect(() => {
    axios
      .get(`${URL}/users`)
      .then((res) => {
        setUsers(res.data.payload);
        users.forEach((user) => {
          let listOfRestrictions = normalizeListOfWords(
            user.dietary_restrictions
          ).split(",");
          //console.log(listOfRestrictions);
          listOfRestrictions.forEach((restriction) => {
            if (!dietaryRestrictions.includes(restriction)) {
              setDietaryResctrions([...dietaryRestrictions, restriction]);
            }
          });
        });
      })
      .catch((err) => console.warn(err.message.payload));
  }, [URL]);

  return (
    <section>
      <Checklist
        setCurrentFilter={setCurrentFilter}
        restrictions={dietaryRestrictions}
      />
      <UserProfile user={user} currentFilter={currentFilter} users={users} />
      <Link to="/">
        <img src={require("../Assets/previous.png")} alt="Back" />
      </Link>
    </section>
  );
}
