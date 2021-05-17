import React, { useState } from 'react';
import '../Forms/PersonalInfo/DonorForm.css';
import Button from '../Button/Button';

const DonorForm = () => {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({
      name: '',
      email: '',
      age: '',
      gender: '',
      mobileNo: '',
      message: '',
      infectedDate: '',
      bloodGroup: '',
      city: '',
      recoveryDate: '',
      diseases: '',
      accept: 'false',
    });
  };

  return (
    <div className="Donor">
      <form onSubmit={handleSubmit}>
        <p className="personal">Personal Information</p>
        <div className="greyBox">
          <label className="formfield">Your Name</label>
          <input
            className="donorinput"
            type="text"
            name="name"
            onChange={updateInput}
            value={formData.name || ''}
          />

          <div className="ageBox">
            <div className="common">
              <label className="formfield">Your Age</label>
              <input
                className="donorinput"
                type="age"
                name="age"
                onChange={updateInput}
                value={formData.age || ''}
              />
            </div>
            <div className="common">
              <label className="formfield">City/State</label>
              <input
                className="donorinput"
                type="age"
                name="age"
                onChange={updateInput}
                value={formData.age || ''}
              />
            </div>
          </div>

          <label className="formfield">Your Email</label>
          <input
            className="donorinput"
            type="email"
            name="email"
            onChange={updateInput}
            value={formData.email || ''}
          />
          <label className="formfield">Your Mobile No.</label>
          <input
            className="donorinput"
            type="no"
            name="mobileNo"
            onChange={updateInput}
            value={formData.mobileNo || ''}
          />
        </div>
        <div className="greyBox">
          <label className="formfield">How can you help in arranging Donors ?</label>
          <textarea
            className="donorinput"
            type="text"
            name="message"
            onChange={updateInput}
            value={formData.message || ''}
          ></textarea>
        </div>
        <div className="greyBox">
          <label className="formfield">Do you have any message for us ?</label>
          <textarea
            className="donorinput"
            type="text"
            name="message"
            onChange={updateInput}
            value={formData.message || ''}
          ></textarea>
        </div>

        <div className="submit">
          <Button buttonName="donate" label="Submit" />
        </div>
      </form>
    </div>
  );
};

export default DonorForm;
