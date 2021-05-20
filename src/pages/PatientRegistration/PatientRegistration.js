import React from 'react';
import MainHeader from '../../components/MainHeader/MainHeader';
import PatientForm from '../../components/Forms/PatientForm/PatientForm';
import '../DonorRegistration/DonorRegistration.css';
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
          <div className="donorMessage">
            <div className="imp">
              Adipisicing labore sit velit tempor ex exercitation cillum eiusmod. Occaecat ea veniam
              consectetur irure duis aliquip ullamco mollit ipsum consectetur do qui reprehenderit
              culpa. Ullamco ex ex tempor ut. Quis id nulla culpa culpa dolore pariatur esse ex enim
              duis.
            </div>
          </div>
          <div className="fill">
            {' '}
            <PatientForm />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default PatientRegistration;
