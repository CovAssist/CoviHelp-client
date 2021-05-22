import React, { useState } from 'react';
import Button from '../../Button/Button';
import '../Form.css';

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
  const [genders] = useState([
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    },
    {
      value: 'other',
      label: 'Other',
    },
  ]);

  const [bloodGroup] = useState([
    {
      value: 'A+',
      label: 'A+',
    },
    {
      value: 'A-',
      label: 'A-',
    },
    {
      value: 'B+',
      label: 'B+',
    },

    {
      value: 'B-',
      label: 'B-',
    },
    {
      value: 'AB+',
      label: 'AB+',
    },
    {
      value: 'AB-',
      label: 'AB-',
    },
    {
      value: 'O+',
      label: 'O+',
    },
    {
      value: 'O-',
      label: 'O-',
    },
  ]);

  return (
    <div className="Donor">
      <form onSubmit={handleSubmit}>
        <p className="personal">Personal Information</p>
        <div className="greyBox">
          <div className="form__subBox">
            <label className="formfield">Your Name *</label>
            <input
              className="donorinput"
              type="text"
              name="name"
              onChange={updateInput}
              value={formData.name || ''}
              required
            />
          </div>
          <div className="form__subBox">
            <div className="ageBox">
              <div className="common">
                <label className="formfield">Your Age *</label>
                <input
                  className="donorinput"
                  type="age"
                  name="age"
                  onChange={updateInput}
                  value={formData.age || ''}
                  required
                />
              </div>

              <div className="common">
                <label className="formfield">Your Gender *</label>
                <select className="donorinput" placeholder="select">
                  {genders.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="form__subBox">
            <label className="formfield">Your Email ID *</label>
            <input
              className="donorinput"
              type="email"
              name="email"
              onChange={updateInput}
              value={formData.email || ''}
              required
            />
          </div>
          <div className="form__subBox">
            <label className="formfield">Your Mobile No. *</label>
            <input
              className="donorinput"
              type="no"
              name="mobileNo"
              onChange={updateInput}
              value={formData.mobileNo || ''}
              required
            />
          </div>
        </div>

        <p className="personal">Medical Information</p>
        <div className="greyBox">
          <div className="form__subBox">
            <label className="formfield">Date of testing positive for Covid-19 *</label>
            <input
              className="donorinput"
              type="date"
              name="infectedDate"
              onChange={updateInput}
              value={formData.infectedDate || ''}
              required
            />
          </div>
          <div className="form__subBox">
            <div className="ageBox">
              <div className="common">
                <label className="formfield">Your Blood group *</label>
                <select className="donorinput">
                  {bloodGroup.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="common">
                <label className="formfield">State/City *</label>
                <input
                  className="donorinput"
                  type="text"
                  name="city"
                  onChange={updateInput}
                  value={formData.city || ''}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form__subBox">
            <label className="formfield">Date of recovery *</label>
            <input
              className="donorinput"
              type="date"
              name="recoveryDate"
              onChange={updateInput}
              value={formData.recoveryDate || ''}
              required
            />
          </div>
          <div className="form__subBox">
            <label className="formfield">Have you suffered from any of the diseases earlier? *</label>
            <input
              className="donorinput"
              type="diseases"
              name="diseases"
              onChange={updateInput}
              value={formData.diseases || ''}
              required
            />
          </div>
        </div>
        <div className="greyBox">
          <div className="form__subBox">
            <label className="formfield">Message/Query</label>
            <textarea
              className="donorinput"
              type="text"
              name="message"
              onChange={updateInput}
              value={formData.message || ''}
            ></textarea>
          </div>
        </div>
        <div className="greyBox">
          <div classname="form__subBox">
            <p className="agreement">
              Fugiat ut exercitation nostrud id cillum aliqua. Aliqua adipisicing sit mollit culpa.
              Officia do consequat consectetur irure exercitation ullamco fugiat ut aute.
              Reprehenderit voluptate consequat sit fugiat mollit enim.
            </p>
            <input
              type="checkbox"
              name="accept"
              onChange={updateInput}
              value={formData.accept || ''}
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
