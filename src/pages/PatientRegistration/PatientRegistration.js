import React from 'react';
import MainHeader from '../../components/MainHeader/MainHeader';
import PatientForm from '../../components/Forms/PatientForm/PatientForm';
import './PatientRegistration.css';
import Footer from '../../components/Footer/Footer';

function PatientRegistration() {
  return (
    <div className="landing">
      <div className="first">
        {' '}
        <MainHeader />
      </div>
      <div className="registration">
        <div>
          <div className="register">Patient Registration</div>
          <div className="note">Please fill the registration form...</div>
          {/* <div className="patient">
            <div className="notneeded">
              We will let you bjxgfxy uibjyguybvub dgfayuzdu iabuzrknow soon of the resources and try to help at our level best and hope you get well soon!<br/>Please fill the marked(*) fields.
            </div>
          </div>  */}
          <div className="fill">
            {' '}
            <PatientForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PatientRegistration;
