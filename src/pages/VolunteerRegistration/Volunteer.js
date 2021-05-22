import React from 'react';
import MainHeader from '../../components/MainHeader/MainHeader';
import './Volunteer.css';
import Footer from '../../components/Footer/Footer';
import VolunteerForm from '../../components/Forms/VolunteerForm/VolunteerForm';

function DonorRegistration() {
  return (
    <div className="landing">
      <div className="first">
        {' '}
        <MainHeader />
      </div>
      <div className="registration">
        <div>
          <div className="register">Volunteer Registration</div>
          <div className="note">Please fill the registration form...</div>
          <div className="donorMessage">
            <div className="imp">
              <div className="quest">How Volunteers can Help?</div>
              <div className="points">
                Before you fill in the form please go through the eligibility criteria here. You
                need a lot of empathy, patience and maturity in handling the cases that come to you.
                <br />
                <br />
                You must be able to keep yourself emotionally and mentally balanced and be able to
                converse with people going through trauma and grief. We are organising regular
                mental health sessions for the volunteers and hope that you will join us. We are
                looking for volunteers who:
                <ul>
                  <li> Must be above 21 years</li>
                  <li> Must have their own phone and computer with an internet connection</li>
                  <li> Must have a working knowledge of English/Hindi</li>
                  <li> Must commit an average of 3 hours per day</li>
                  <li> Are comfortable joining WhatsApp groups and online google documents</li>
                  <li> Must show clear accountability and honesty by following up and following through on finding resources</li>
                </ul>     
              </div>
            </div>
          </div>
          <div className="fill">
            {' '}
            <VolunteerForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DonorRegistration;
