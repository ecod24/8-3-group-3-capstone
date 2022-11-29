import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function SignIn() {
  const [userProfile, setUserProfile] = useState({
    email: "",
    password: "",
  });
  const auth = getAuth();

  const handleTextChange = (event) => {
    setUserProfile({ ...userProfile, [event.target.id]: event.target.value });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, userProfile.email, userProfile.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          console.log(`Welcome back ${userProfile.email}`);
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(`${userProfile.email} is not registered`);
        const errorMessage = error.message;
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userProfile);
    signIn();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label className="text-3xl" htmlFor="date">
          Email
        </label>
        <input type="text" id="email" onChange={handleTextChange} />
        <label>Password</label>
        <input type="password" id="password" onChange={handleTextChange} />
        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
}
