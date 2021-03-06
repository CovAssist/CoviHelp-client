import React from 'react';
import Header from '../../components/Header/Header';
import covidresearch from '../../Assests/clip-research-of-vaccines-and-cures-coronavirus-medical-team-and-scientists-research-covid-19 - Copy.png';
import './MainHeader.css';
import SearchBar from '../../components/SearchBar/SearchBar';

function MainHeader() {
  return (
    <div className="mainHeader">
      <Header />
      <div className="mid">
        <div className="headerName">
          <div className="name">
            covi<span className="care">Care</span>
            <div className="moto">stay at Home and stay Safe</div>
          </div>
        </div>
        <div className="covidresearch">
          <img src={covidresearch} className="covid" alt="covid Research" />
        </div>
      </div>
      <SearchBar />
    </div>
  );
}

export default MainHeader;
