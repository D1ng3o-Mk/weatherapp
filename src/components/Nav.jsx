import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
      <img src={Logo} alt="not found" />
      <h3>Weather app</h3>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default Nav;
