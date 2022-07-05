import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="mainPage">
    <h2>About</h2>
    <p>This example shows how to use React Router!</p>
    <Link to='/' className='btn'>
      Home
    </Link>
    <Link to ='/messages' className='btn'>
      Messages
    </Link>
  </div>
);

export default About;