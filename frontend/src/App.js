import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/home.js';
import Nav from './Pages/navbar.js';
import './Styles/NavBar.css';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main>
        <HomePage />
        <h1 className='NavText'>About Us</h1>
      </main>
    </BrowserRouter>
  );
}

export default App;
