import React from 'react';
import './SearchBar.css';
import Button from '../Button/Button';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const SearchBar = () => {

  return (
    <div className="searchBar">
      <div className="type">
        <div className="searchIcon">
          <SearchIcon />
        </div>
        <select className="select" type="text" placeholder="select category">
          <option value="0" hidden selected>
            select category
          </option>
          <option value="1">Vacant Beds</option>
          <option value="2">Oxygen Availability</option>
        </select>
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
};

export default SearchBar;
