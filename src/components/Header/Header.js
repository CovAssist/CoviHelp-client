import React from 'react';
import Button from '../Button/Button';
import Popup from '../Popup/Popup';
import { useState } from 'react';
import './Header.css';

function Header() {
  const [buttonPopup, setButtonPopup] = useState(false);
  // const [timedPopup, setTimedPopup] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimedPopup(true);
  //   }, 3000);
  // }, []);

  return (
    <div className="head">
      <div className="header">
        {' '}
        <div className="logo">
          covi<span className="care">Care</span>
        </div>
        <div className="navLinks">
          <div className="navName">Home</div>
          <div className="navName">Verified resources</div>
          <div className="navName">Contact</div>
        </div>
        <div className="Donate" onClick={() => setButtonPopup(true)}>
          <Button buttonName="donate" label="Donate" />
        </div>
      </div>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div className="covi">
          covi<span className="care">Care</span>
        </div>
        <div className="instruct">
          you need to register/ login first if you want to donate <br></br> for the secuirty purpose
        </div>
        <div className="googled">
          <Button buttonName="google" label="Google" />
        </div>
      </Popup>
      {/* <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h1>covicare time</h1>
      </Popup> */}
    </div>
  );
}

export default Header;
