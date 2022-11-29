// import { useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";
// import Register from "../Components/Signup";
// import "./Signup.css";

// function Signup() {
//   const [user, setUser] = useState({});

//   function handleCallBackResponse(response){
//     var userObject = jwt_decode(response.credential);
//     setUser(userObject);
//     document.getElementById("signUp").hidden = true;
//   }

//   function handleSignOut(event) {
//     setUser({});
//     document.getElementById("signUp").hidden = false;
//   }

//   return (
//   <div className="signup">
//   <h1>Already have an account?</h1>
//   <div id="signInDiv" data-onsuccess="onSignIn"><a href="/login"><button>Sign Up</button></a></div>
//   <section id="center">
//   <Register />
//   </section>

//   </div>
//   );
// }

// export default Signup;
