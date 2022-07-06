import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
  <div className="mainPage">
    <h2>Home Page</h2>
    <p>My Home page!</p>
    <ul className="appNotes">Files that were changed:
    <li>App.js</li>
    <li>App.css</li>
    <li>NavBar.js</li>
    <li>all files in 'pages'</li>
    </ul>
    <Link to ='/about' className='btn'>
      About
    </Link>
    <Link to ='/messages' className='btn'>
      Messages
    </Link>
  </div>
);

export default Home;