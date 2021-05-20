import React from 'react';
import MainHeader from '../../components/MainHeader/MainHeader';
import './Contact.css';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import Button from '../../components/Button/Button';

function Contact() {
  return (
    <div className="contact">
      <div className="first">
        {' '}
        <MainHeader />
      </div>
      <div className="second">
        <div className="heading">Get in touch!</div>
        <div className="subHeading">contact us for any kind of help or to join the team.</div>
        <div className="contactBox">
          {' '}
          <div className="onebox">
            <div className="callicon">
              <CallIcon />
            </div>
            <div className="num">+91 000 000 0000</div>
          </div>
          <div className="onebox">
            <div className="mailicon">
              <MailIcon />
            </div>
            <div className="mailid">covidcare111@gmail.com</div>
          </div>
        </div>
        <div className="greyBoxm">
          <div className="form__head">Contact Us</div>
          <label className="formfield">Your Name</label>
          <input className="donorinput" type="text" name="name" />
          <label className="formfield">Your Email</label>
          <input className="donorinput" type="email" name="email" />
          <label className="formfield">Your Message</label>
          <input className="donorinputm" type="text" name="Message" />
          <div className="submit">
            <Button buttonName="donate" label="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
