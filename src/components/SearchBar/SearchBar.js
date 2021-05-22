import React from 'react';
import './SearchBar.css';
import Button from '../Button/Button';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  return (
    <div className="searchBar">
      <div className="type">
        <div className="searchIcon">
          <SearchIcon />
        </div>

        <div className="dropdown">
          <button className="dropbtn">Select Category</button>
          <div className="dropdown-content">
            <Link to="/bed">Vacant Bed</Link>
            <Link to="/Oxygen">Oxygen Availability</Link>
          </div>
        </div>
      </div>
      <div className="location">
        <div className="locateIcon">
          <LocationOnIcon />
        </div>
        <input className="loct" type="text" placeholder="Your Location" />
      </div>
      <Button buttonName="search" label="search" />
    </div>
  );
};

export default SearchBar;
