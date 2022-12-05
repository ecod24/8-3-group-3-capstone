import '../Styles/About.css';
export default function About() {
  return (
    <div>
      <h1 className='AboutUs'>About the Table For Two team</h1>
      <div>
        <h1>Abdullah Tasfiek</h1>
        <img
          src={require('../Assets/github_icon.png')}
          className='GithubIcon'
          alt='Github Icon'
        />
        <h2>Github Link</h2>
        <img
          src={require('../Assets/LinkedIn_logo.png')}
          className='LinkedInIcon'
          alt='Linked In Icon'
        />
        <h2>Linked In</h2>
        <h3>
          My name is Abdullah Tasfiek. I'm a software engineer from the 8.3
          cohort at Pursuit. Other than programming, I enjoy going on hikes,
          weight lifting, and playing video games. If you would like to know
          more about me, check out my Github!
        </h3>
      </div>
      <br />
      <div>
        <h1>Edwin Codrington</h1>

        <img
          src={require('../Assets/github_icon.png')}
          className='GithubIcon'
          alt='Github Icon'
        />

        <h2>Github Link</h2>

        <img
          src={require('../Assets/LinkedIn_logo.png')}
          className='LinkedInIcon'
          alt='Linked In Icon'
        />
        <h2>Linked In</h2>
        <h3>
          Amateur Software Engineer, Professional Problem Solver. Happiest when
          working with cars or computers, preferably both!
        </h3>
      </div>
      <br />
      <h1>Charlie Moran</h1>
      <img
        src={require('../Assets/github_icon.png')}
        className='GithubIcon'
        alt='Github Icon'
      />
      <h2>Github Link</h2>
      <img
        src={require('../Assets/LinkedIn_logo.png')}
        className='LinkedInIcon'
        alt='Linked In Icon'
      />
      <h2>Linked In</h2>
      <h3>
        Full Stack Web Developer, Jack of all trades, Foodie, Metalhead,
        Musician, and overall tech geek. I love all new forms of technology!
        Always open to collaborate and learning. Did you know bananas are a
        great source of potassium and promotes muscle growth? Also that bananas
        are a berry and strawberries are not?
      </h3>
      <br />

      <h1>Hermanclyde Guerrero</h1>
      <img
        src={require('../Assets/github_icon.png')}
        className='GithubIcon'
        alt='Github Icon'
      />
      <h2>Github Link</h2>
      <img
        src={require('../Assets/LinkedIn_logo.png')}
        className='LinkedInIcon'
        alt='Linked In Icon'
      />
      <h2>Linked In</h2>
      <h3>
        An aspiring software engineer of Pursuit's 8.3 cohort, with a strong
        passion to enter video game development. I dabble in video game
        modifications and have a strong inclination towards history, economics,
        and old school video games.
      </h3>
    </div>
  );
}
