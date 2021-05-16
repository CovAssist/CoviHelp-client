import React from 'react';
import './SearchBar.css';
import Button from '../Button/Button';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function SearchBar() {
  return (
    <div className="searchBar">
      <div className="category">
        <div className="searchIcon">
          <SearchIcon />
        </div>
        <input className="select" type="text" placeholder="select category" />
      </div>
      <div className="location">
        <div className="locateIcon">
          <LocationOnIcon />
        </div>
        <input className="select" type="text" placeholder="select location" />
      </div>
      <Button buttonName="donate" label="search" />
    </div>
  );
}

export default SearchBar;
