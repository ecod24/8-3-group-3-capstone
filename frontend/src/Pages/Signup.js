import "./Signup.css";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import Register from "../Components/Signup";

function Signup() {
  const [user, setUser] = useState({});

  function handleCallBackResponse(response){
    var userObject = jwt_decode(response.credential);
    setUser(userObject);
    document.getElementById("signUp").hidden = true;
  }

  function handleSignOut(event) {
    setUser({});
    document.getElementById("signUp").hidden = false;
  }

  useEffect(()=> {
    /* global google*/
    google.accounts.id.initialize({
      client_id: "255254619189-pvd3mijlap9mniuepp7jmb2065m4ejun.apps.googleusercontent.com",
      callback: handleCallBackResponse
  });

    google.accounts.id.renderButton(
      document.getElementById("signUp"),
      {theme: "outline", size: "large"}
    )
  }, []);

  return (
  <div className="signup">
  <h1>Join us!</h1>
  <div id="signUp">button</div>
  <Register />
  <section id="center">
  </section>
  

  </div>
  );
}

export default Signup;