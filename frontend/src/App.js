import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import FoodsPage from './Pages/FoodsPage.js';
import HomePage from './Pages/home.js';
import Nav from './Pages/navbar.js';
import UserPage from './Pages/UserPage.js';
import Recipe from './Pages/Recipe.js';
import Login from './Pages/Login.js';
import Signup from './Pages/Signup.js';
// import Cleartext from './clearText.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/myfoods' element={<FoodsPage />} />
          <Route path='/users' element={<UserPage />} />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </main>
      <Link className='AboutLink'>
        <div>
          <h1 className='AboutUs'>About Us</h1>
        </div>
      </Link>
    </BrowserRouter>
  );
}

export default App;
