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
      <title>Table for Two</title>
    <link href="./Styles/style.css" rel="stylesheet" type="text/css" />
    <body>
      {/* <Cleartext /> */}
    <div id="container">
      <div id="header">
        <div id="login_box">
          <form method="get" action="#">
           <label>Email</label>
             <input className="inputfield" name="email_address" type="text" />
              &nbsp;&nbsp;&nbsp;
                <label>Password</label>
              <input className="inputfield" name="password" type="password" />
            <input className="button" type="submit" name="Submit" defaultValue="" />
           </form>
          <a href="#">Sign up</a> </div>
        {/* <!-- end of login box --> */}
      </div>
  {/* <!-- end of header --> */}
      <div id="menu">
        <ul>
      <li><a href="#" className="current">Home</a></li>
      <li><a href="#">Search</a></li>
      <li><a href="#">Successful Stories</a></li>
      <li><a href="#">Last Added</a></li>
      <li><a href="#">Your Profile</a></li>
      <li><a href="#">Company</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div>
  {/* <!-- end of menu --> */}
  <div id="content">
    <div id="content_left">
      <div className="content_left_section_01">
        <div className="welcome_title"></div>
          <h1>Welcome to Table for Two!</h1>
          <img src="images/image_02.jpg" alt="" style="float: right" />
            <p> The <strong>Table for Two</strong> "Slogan Here" </p>
            <p> Hi, this is placement holder text. I am not writing about anything right now other than this being placement holder text. You should stop reading this and actually read something worth your time like The Lord of the Rings or Michio Kaku's God Equation. Seriously, what are you doing with your life? Go out and live it, you think reading all this text is going to change your world view or provide some insight? NO! This is placement holder text. Stop and think about what you are doing right now, is this really that important to you? You know what? Alright, fine... blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah... You're still reading? Oh Mylanta you are persistent. I don't think I've ever met anyone as dedicated to reading useless information as you. I hope that you have a great day, I am tired of writing this, this is after all just placement holder text. YOU WIN, I give up. </p>
      </div>
      <div className="cleaner_with_divider">&nbsp;</div>
      <div className="content_left_section_02">
        <div className="latest_profile_title">Latest Members</div>
        <div className="latest_profile_box"> <img src="images/image_03.jpg" alt="" />
          <div className="name">Donec a purus vel</div>
          Age: 18<br />
          Mauris pede nisl, placerat nec, lobortis vitae.<br />
          <div className="readmore"><a href="#">Details &raquo;</a></div>
        </div>
        <div className="cleaner_with_width">&nbsp;</div>
        <div className="latest_profile_box"> <img src="images/image_04.jpg" alt="" />
          <div className="name">Sed pellentesque</div>
          Age: 24<br />
          Suspendisse ac magna quis est eleifend dictum.<br />
          <div className="readmore"><a href="#">Details &raquo;</a></div>
        </div>
        <div className="cleaner_with_height">&nbsp;</div>
        <div className="latest_profile_box"> <img src="images/image_05.jpg" alt="" />
          <div className="name">Sed justo dolor</div>
          Age: 22<br />
          Morbi nec magna pulvinar mi scelerisque posuere.<br />
          <div className="readmore"><a href="#">Details &raquo;</a></div>
        </div>
        <div className="cleaner_with_width">&nbsp;</div>
        <div className="latest_profile_box"> <img src="images/image_06.jpg" alt="" />
          <div className="name">Quisque ut odio</div>
          Age: 20<br />
          Fusce non lacus et lorem ornare interdum.<br />
          <div className="readmore"><a href="#">Details &raquo;</a></div>
        </div>
        <div className="cleaner">&nbsp;</div>
        <span></span> </div>
      {/* <!-- end of section 2 --> */}
    </div>
    {/* <!-- end of content left --> */}
    <div id="content_right">
      <div id="templatmeo_quick_search">
        <h1>Quick Search</h1>
        <form method="get" action="#">
          <div className="form_row">
            <label>I am</label>
            <select name="i_am">
              <option>man</option>
              <option>woman</option>
            </select>
            &nbsp;&nbsp;
            <label>Seeking</label>
            <select name="seeking">
              <option>man</option>
              <option>woman</option>
            </select>
          </div>
          <div className="form_row">
            <label>Looking for</label>
            <select name="seeking">
              <option>friendship</option>
              <option>a date</option>
            </select>
          </div>
          <div className="form_row">
            <label>I was born</label>
            <select name="day">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
              <option>21</option>
              <option>22</option>
              <option>23</option>
              <option>24</option>
              <option>25</option>
              <option>26</option>
              <option>27</option>
              <option>28</option>
              <option>29</option>
              <option>30</option>
              <option>31</option>
            </select>
            <select name="month">
              <option>Jan</option>
              <option>Feb</option>
              <option>Mar</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>Aug</option>
              <option>Sep</option>
              <option>Oct</option>
              <option>Nov</option>
              <option>Dec</option>
            </select>
            <input className="inputfield" name="year" type="text" defaultValue="year" style="width:50px;"   onFocus="clearText(this)" onBlur="clearText(this)" />
          </div>
          <div className="form_row">
            <label>By Profile</label>
            <input className="inputfield" name="email_address" type="text" />
          </div>
          <div className="form_row">
            <label>Show Photo</label>
            <input type="checkbox" name="option1" />
          </div>
          <input type="submit" defaultValue="Submit" id="Submit" />
        </form>
        <div className="cleaner">&nbsp;</div>
        <span></span> </div>
      {/* <!-- end of quick search --> */}
      <div className="content_right_section">
        <h1>Successful Stories</h1>
        <img src="images/image_01.jpg" alt="" />
        <h2>Jeffrey Prado</h2>
        <p>"I didn't die."</p>
        <a href="#" className="readmore">Read more &raquo;</a> </div>
    </div>
    {/* <!-- end of content right --> */}
    <div className="cleaner_with_height">&nbsp;</div>
  </div>
  {/* <!-- end of content --> */}
  <div id="footer">
    <div style="clear: both; margin-bottom: 10px;">
    <a href="#">Home</a> | <a href="#">Search</a> | <a href="#">Terms of use</a> | <a href="#">Privacy Policies</a> | <a href="#">FAQs</a> | <a href="#">Contact Us</a><br />
    Copyright &copy; 2022 <a href="#"><strong>Table for Two</strong></a> | Designed by BananaMan</div>
  {/* <!-- end of footer --> */}
</div>
{/* <!-- end of container --> */}
</div>
</body>

      <Link className='AboutLink'>
        <div>
          <h1 className='AboutUs'>About Us</h1>
        </div>
      </Link>
    </BrowserRouter>
  );
}

export default App;
