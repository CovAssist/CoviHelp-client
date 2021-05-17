import React from 'react';
import MainHeader from '../../components/MainHeader/MainHeader';
import './Volunteer.css';
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
              <div className="quest">How Volunteer can Help ?</div>
              <div className="points">
                Adipisicing labore sit velit tempor ex exercitation cillum eiusmod. Occaecat ea
                veniam consectetur irure duis aliquip ullamco mollit ipsum consectetur do qui
                reprehenderit culpa. Ullamco ex ex tempor ut. Quis id nulla culpa culpa dolore
                pariatur esse ex enim duis.
                <br></br>
                <br></br>
                Adipisicing labore sit velit tempor ex exercitation cillum eiusmod. Occaecat ea
                veniam consectetur irure duis aliquip ullamco mollit ipsum consectetur do qui
                reprehenderit culpa. Ullamco ex ex tempor ut. Quis id nulla culpa culpa dolore
                pariatur esse ex enim duis.
              </div>
            </div>
          </div>
          <div className="fill">
            {' '}
            <VolunteerForm />
          </div>
        </div>
      </div>
      <div className="footer">.</div>
    </div>
  );
}

export default DonorRegistration;
