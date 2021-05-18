import React from 'react';
import Button from '../Button/Button';
import Popup from '../Popup/Popup';
import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="head">
      <div className="header">
        {' '}
        <div className="logo">
          covi<span className="care">Care</span>
        </div>
        <div className="navLinks">
          <div className="navName">
            <Link to="/">Home</Link>
          </div>
          <div className="navName">Verified resources</div>
          <div className="navName">
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
        <div className="Donate" onClick={() => setButtonPopup(true)}>
          <Button buttonName="donate" label="Donate" />
        </div>
      </div>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
      {/* <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h1>covicare time</h1>
      </Popup> */}
    </div>
  );
}

export default Header;
