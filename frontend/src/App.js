import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodsPage from "./Pages/FoodsPage.js";
import HomePage from "./Pages/home.js";
import Nav from "./Pages/navbar.js";
import UserPage from "./Pages/UserPage.js";
import Recipe from "./Pages/Recipe.js";
import ExpandedUser from "./Pages/ExpandedUser.js";
// import Cleartext from './clearText.js';
// import Login from "./Pages/Login.js";
// import Signup from "./Pages/Signup.js";
import AboutPage from "./Pages/About.js";
import NewUserPage from "./Pages/NewUserPage.js";
import "./App.css";
import Register from "./Components/Register.js";
import SignIn from "./Components/SignIn.js";
import Footer from "./Components/Footer.js";
import EditPage from "./Pages/EditPage.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { ToastContainer } from "react-toastify";

const API = process.env.REACT_APP_API_URL;

function App() {
  return (
    <BrowserRouter>
      <Nav className="bg-beige" />

      <main className="bg-beige">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/myfoods" element={<FoodsPage />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/users/new" element={<NewUserPage />} />
          <Route path="/users/:id" element={<ExpandedUser />} />
          {/* <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} /> */}
          <Route path="/users/:id/edit" element={<EditPage API={API} />} />
          {/* <Route path="/users/:id" element={<></>} />//a show page, eventually */}
        </Routes>
        <Footer />
        <ToastContainer />
      </main>
    </BrowserRouter>
  );
}

export default App;
