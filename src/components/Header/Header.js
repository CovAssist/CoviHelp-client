import React from 'react';
import Button from '../Button/Button';
import Popup from '../Popup/Popup';
import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isLogin, setIsLogin] = useState(false);
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
          <div className="navName">
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
        {!isLogin ? (
          <div className="Donate" onClick={() => setButtonPopup(true)}>
            <Button buttonName="donate" label="Donate" />
          </div>
        ) : (
          <div className="Donate">
            <Link to="/DonorRegistration">
              <Button buttonName="donate" label="Donate" />
            </Link>
          </div>
        )}
      </div>

      <Popup
        login={isLogin}
        setLogin={setIsLogin}
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
      ></Popup>
    </div>
  );
}

export default Header;
