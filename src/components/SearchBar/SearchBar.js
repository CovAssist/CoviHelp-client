import React from 'react';
import './SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';

function SearchBar() {
  return (
    <div className="searchBar">
      <div className="category">
        <div className="searchIcon">
          <SearchIcon />
        </div>
        <div className="select">select category</div>
      </div>
      <div className="divider">.</div>
      <div className="location">
        <div className="locateIcon">
          <LocationOnIcon />
        </div>
        <div className="select">select location</div>
      </div>
    </div>
  );
}

export default SearchBar;
