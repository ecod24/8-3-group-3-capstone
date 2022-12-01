// import "./Login.css";
// import jwt_decode from "jwt-decode";
// import { useEffect, useState } from "react";
// import LoginComp from "../Components/Login"
// import "./Login.css";

// function Login() {
//   const [user, setUser] = useState({});

//   function handleCallBackResponse(response){
//     var userObject = jwt_decode(response.credential);
//     setUser(userObject);
//     document.getElementById("signInDiv").hidden = true;
//   }

//   function handleSignOut(event) {
//     setUser({});
//     document.getElementById("signInDiv").hidden = false;
//   }

//   return (
//   <div className="login">
//   <h1>Don't have an account?</h1>
//   <div id="signInDiv" data-onsuccess="onSignIn"><a href="/signup"><button>Sign Up</button></a></div>
//   { 
//     Object.keys(user).length !== 0 &&
//     <button onClick={ (e) => handleSignOut}>Sign Out</button>
//   }
  
//   { user && 
//     <div>
//       {/* <img src = {user.picture} alt="user"></img> */}
//       <h3>{user.name}</h3>
//     </div>
//   }
//   <LoginComp />
//   </div>
//   );
// }

// export default Login;