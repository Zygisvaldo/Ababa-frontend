import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">
        {/* Your logo here */}
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
          {/* Add other navigation links as needed */}
        </ul>
      </nav>
      <div className="user-profile">
        {/* User profile or login/logout buttons here */}
      </div>
    </header>
  );
};

export default Header;
