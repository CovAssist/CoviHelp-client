import React from 'react';
import MainHeader from '../../components/MainHeader/MainHeader';
import './Contact.css';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';

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
        <div className="donorMessage">
          <div className="imp">
            <div className="quest">About Us</div>
            <div className="points">
              From a WhatsApp group of almost six people to a group of 70+ committed volunteers.
              From collecting leads, verifying them, allocating resource sheets to meeting actual
              needs of people, in our small way, we aim to aid as many people in as many ways we
              can. By creating a network of NGOs and other volunteer groups, we try to ensure that
              no one remains unattended. We are also connected to a group of doctors who offer
              digital assistance in this crisis.
              <br />
              <br />
              We understand that it is difficult for everyone, yet, we are trying to strengthen the
              fight against this pandemic. Many disappointments, sorrows and pain disappoint us, and
              to deal with this issue we have constituted a team of psychologists who can counsel
              and strengthen people. We are committed to creating a portal for the same. We have a
              technicak team which is dedicated in creating website and managing it effortlessely.
              In making a small difference, we are 'Helping to Heal'. Here we are Team ARAV
              (Alliance of Relief and Aid Volunteers)
            </div>
          </div>
        </div>

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
            <div className="mailid">covidcare111 @gmail.com</div>
          </div>
        </div>
        <div className="greyBoxm">
          <div className="form__head">Contact Us</div>
          <div className="form__cont">
            <div className="form__subBox">
              {' '}
              <label className="formfield">Your Name</label>
              <input className="donorinput" type="text" name="name" />
            </div>
            <div className="form__subBox">
              {' '}
              <label className="formfield">Your Email</label>
              <input className="donorinput" type="email" name="email" />
            </div>
            <div className="form__subBox">
              <label className="formfield">Your Message</label>
              <textarea
                type="text"
                className="donorinputm"
                placeholder="Enter your message here..."
              ></textarea>
            </div>
            <div className="form__submit">
              <Button buttonName="submit" label="Submit" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
