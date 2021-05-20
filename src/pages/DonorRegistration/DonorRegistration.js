import React from 'react';
import MainHeader from '../../components/MainHeader/MainHeader';
import DonorForm from '../../components/Forms/DonorForm/DonorForm';
import './DonorRegistration.css';
import Footer from '../../components/Footer/Footer';

function DonorRegistration() {
  return (
    <div className="landing">
      <div className="first">
        {' '}
        <MainHeader />
      </div>
      <div className="registration">
        <div>
          <div className="register">Donor Registration</div>
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
            <DonorForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DonorRegistration;
