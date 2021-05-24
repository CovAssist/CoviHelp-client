import React, { useState } from 'react';
import { saveVolunteer } from '../../../api';
import Button from '../../Button/Button';

const DonorForm = () => {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (event) => {
    if (formData.accept === 'false' || formData.accept === undefined) {
      return event.preventDefault();
    }
    event.preventDefault();
    const data = await saveVolunteer(formData);
    if (data.success) {
      setFormData({
        name: '',
        email: '',
        age: '',
        gender: '',
        contact: '',
        description: '',
      });
    } else {
      console.log(data);
    }
  };

  return (
    <div className="Donor">
      <form onSubmit={handleSubmit}>
        <p className="personal">Personal Information</p>
        <div className="greyBox">
          <div className="form__subBox">
            <label className="formfield">Your Name</label>
            <input
              className="donorinput"
              type="text"
              name="name"
              onChange={updateInput}
              value={formData.name || ''}
            />
          </div>
          <div className="form__subBox">
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
            </div>
            <div className="ageBox">
              <div className="common">
                <label className="formfield">State</label>
                <input
                  className="donorinput"
                  type="state"
                  name="state"
                  onChange={updateInput}
                  value={formData.state || ''}
                />
              </div>
              <div className="common">
                <label className="formfield">City</label>
                <input
                  className="donorinput"
                  type="city"
                  name="city"
                  onChange={updateInput}
                  value={formData.city || ''}
                />
              </div>
            </div>
          </div>
          <div className="form_subBox"></div>
          <div className="form__subBox">
            {' '}
            <label className="formfield">Your Email ID</label>
            <input
              className="donorinput"
              type="email"
              name="email"
              onChange={updateInput}
              value={formData.email || ''}
            />
          </div>
          <div className="form__subBox">
            <label className="formfield">Your WhatsApp enabled Mobile No.</label>
            <input
              className="donorinput"
              type="no"
              name="contact"
              onChange={updateInput}
              value={formData.contact || ''}
            />
          </div>
        </div>
        <div className="greyBox">
          <div className="form__subBox">
            {' '}
            <label className="formfield">
              What has motivated you to volunteer for Covid assistance work?
            </label>
            <textarea
              className="donorinput"
              type="text"
              name="description"
              onChange={updateInput}
              value={formData.description || ''}
            ></textarea>
          </div>
        </div>
        <div className="greyBox">
          <div className="form__subBox">
            <p className="agreement">
              I understand that this can be a time-sensitive volunteering activity and that I intend
              to honor my commitment with full honesty.
            </p>
            <input
              type="checkbox"
              name="accept"
              onChange={(e) => {
                e.target.value = e.target.checked;
                updateInput(e);
              }}
              checked={formData.accept === 'true'}
            />
            <label className="tnc">Accept</label>
          </div>
        </div>

        <div className="form__submit">
          <Button buttonName="donate" label="Submit" />
        </div>
      </form>
    </div>
  );
};

export default DonorForm;
