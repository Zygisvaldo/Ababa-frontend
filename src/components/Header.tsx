import React from 'react';
import { FaBeer } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">
        <FaBeer />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
          
        </ul>
      </nav>
      <div className="user-profile">
        <a href="/auth/register">SignUp</a>
        <a href="/auth/login">LogIn</a>
      </div>
    </header>
  );
};

export default Header;
