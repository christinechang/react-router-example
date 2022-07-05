import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
  <div className="mainPage">
    <h2>Home Page</h2>
    <p>My Home page!</p>
    <Link to ='/about' className='btn'>
      About
    </Link>
    <Link to ='/messages' className='btn'>
      Messages
    </Link>
  </div>
);

export default Home;