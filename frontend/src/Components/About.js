import '../Styles/About.css';
export default function About() {
  return (
    <div id='AboutDiv'>
      <section>
        <h1 className='AboutUs'>About the Table for Two Team</h1>
      </section>
      <section id='AboutSect'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg border-double border-4 border-black-600 ...'>
          <h1 className='text-center font-bold text-2xl mb-5'>
            Abdullah Tasfiek
          </h1>

          <img
            src={require('../Assets/github_icon.png')}
            className='GithubIcon'
            alt='Github Icon'
          />
          <a href='https://github.com/Abdullah-Tasfiek'>Github Link</a>

          <img
            src={require('../Assets/LinkedIn_logo.png')}
            className='LinkedInIcon'
            alt='Linked In Icon'
          />
          <a href='https://www.linkedin.com/in/atasfiek/'>Linked In</a>

          <h3>
            My name is Abdullah Tasfiek. I'm a software engineer from the 8.3
            cohort at Pursuit. Other than programming, I enjoy going on hikes,
            weight lifting, and playing video games. If you would like to know
            more about me, check out my Github!
          </h3>
        </div>

        <br />
        <div className='max-w-sm rounded overflow-hidden shadow-lg border-double border-4 border-black-600 ...'>
          <h1 className='text-center font-bold text-2xl mb-5'>
            Edwin Codrington
          </h1>

          <img
            src={require('../Assets/github_icon.png')}
            className='GithubIcon'
            alt='Github Icon'
          />

          <a href='https://github.com/ecod24'>Github Link</a>

          <img
            src={require('../Assets/LinkedIn_logo.png')}
            className='LinkedInIcon'
            alt='Linked In Icon'
          />
          <a href='https://www.linkedin.com/in/ecodrington24/'>Linked In</a>

          <h3>
            Amateur Software Engineer, Professional Problem Solver. Happiest
            when working with cars or computers, preferably both!
          </h3>
        </div>
        <br />
        <div className='max-w-sm rounded overflow-hidden shadow-lg border-double border-4 border-black-600 ...'>
          <h1 className='text-center font-bold text-2xl mb-5'>Charlie Moran</h1>

          <img
            src={require('../Assets/github_icon.png')}
            className='GithubIcon'
            alt='Github Icon'
          />
          <a href='https://github.com/CharlieMoran'>Github Link</a>

          <img
            src={require('../Assets/LinkedIn_logo.png')}
            className='LinkedInIcon'
            alt='Linked In Icon'
          />
          <a href='https://www.linkedin.com/in/c-a-l-m/'>Linked In</a>

          <h3>
            Full Stack Web Developer, Jack of all trades, Foodie, Metalhead,
            Musician, and overall tech geek. I love all new forms of technology!
            Always open to collaborate and learning. Did you know bananas are a
            great source of potassium and promotes muscle growth? Also that
            bananas are a berry and strawberries are not?
          </h3>
        </div>
        <br />
        <div className='max-w-sm rounded overflow-hidden shadow-lg border-double border-4 border-black-600 ...'>
          <h1 className='text-center font-bold text-2xl mb-5'>
            Hermanclyde Guerrero
          </h1>

          <img
            src={require('../Assets/github_icon.png')}
            className='GithubIcon'
            alt='Github Icon'
          />
          <a href='https://github.com/HC-Guerrero'>Github Link</a>

          <img
            src={require('../Assets/LinkedIn_logo.png')}
            className='LinkedInIcon'
            alt='Linked In Icon'
          />
          <a href='https://www.linkedin.com/in/hermanclyde-guerrero/'>
            Linked In
          </a>

          <h3>
            An aspiring software engineer of Pursuit's 8.3 cohort, with a strong
            passion to enter video game development. I dabble in video game
            modifications and have a strong inclination towards history,
            economics, and old school video games.
          </h3>
        </div>
      </section>
    </div>
  );
}
