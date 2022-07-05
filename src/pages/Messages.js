import React from 'react';
import { Link } from 'react-router-dom';

const Messages = () => (
  <div className="mainPage">
    <h2>Messages</h2>
    <p>Messages</p>
    <Link to='/' className='btn'>
      Home
    </Link>
    <Link to ='/about' className='btn'>
      About
    </Link>
  </div>
);

export default Messages;