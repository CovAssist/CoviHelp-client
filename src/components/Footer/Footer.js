import React from 'react';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="fmail">
        <div className="ic">
          <CallIcon />
        </div>
        <div className="data">+91 000 000 0000</div>
      </div>
      <div className="fmail">
        <div className="ic">
          <MailIcon />
        </div>
        <div className="data">covidcare111@gmail.com</div>
      </div>
    </div>
  );
}

export default Footer;
