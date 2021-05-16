import React, { useState } from 'react';
import Button from '../../Button/Button';
import './DonorForm.css';

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
      bloodGroup:'',
      city:'',
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
        <p className="category">Personal Information</p>
        <div className="container">
          <label className="formfield">Your Name</label>
          <input
            className="input"
            type="text"
            name="name"
            onChange={updateInput}
            value={formData.name || ''}
          />

          <div className="ageBox">
            <div className="common">
              <label className="formfield">Your Age</label>
              <input
                className="input"
                type="age"
                name="age"
                onChange={updateInput}
                value={formData.age || ''}
              />
            </div>

            <div className="common">
              <label className="formfield">Your Gender</label>
              <select className="input" placeholder="select">
                {genders.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <label className="formfield">Your Email</label>
          <input
            className="input"
            type="email"
            name="email"
            onChange={updateInput}
            value={formData.email || ''}
          />
          <label className="formfield">Your Mobile No.</label>
          <input
            className="input"
            type="no"
            name="mobileNo"
            onChange={updateInput}
            value={formData.mobileNo || ''}
          />
        </div>

        <p className="category">Medical Information</p>
        <div className="container">
          <label className="formfield">Date of testing positive for Covid-19</label>
          <input
            className="input"
            type="date"
            name="date"
            onChange={updateInput}
            value={formData.date || ''}
          />

          <div className="ageBox">
            <div className="common">
              <label className="formfield">Your Blood group</label>
              <select className="input">
                {bloodGroup.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="common">
              <label className="formfield">State/City</label>
              <input
                className="input"
                type="text"
                name="city"
                onChange={updateInput}
                value={formData.city || ''}
              />
            </div>
          </div>

          <label className="formfield">Date of recovery</label>
          <input
            className="input"
            type="date"
            name="date"
            onChange={updateInput}
            value={formData.date || ''}
          />
          <label className="formfield">Have you suffered from any of the diseases earlier?</label>
          <input
            className="input"
            type="diseases"
            name="diseases"
            onChange={updateInput}
            value={formData.diseases || ''}
          />
        </div>
        <div className="container">
          <label className="formfield">Message/Query</label>
          <textarea
            className="input"
            type="text"
            name="message"
               onChange={updateInput}
            value={formData.message || ''}
          ></textarea>
        </div>
        <div className="container">
          <p className='agreement'>
            Fugiat ut exercitation nostrud id cillum aliqua. Aliqua adipisicing sit mollit culpa. Officia do consequat consectetur irure exercitation ullamco fugiat ut aute. Reprehenderit voluptate consequat sit fugiat mollit enim.
          </p>
          <input
            type="checkbox"
            name="accept"
            onChange={updateInput}
            value={formData.accept || ''}
          />
          <label className="tnc">Accept</label>
        </div>
        <div className='submit'>
          <Button buttonName='donate' label='Submit' />
        </div>
        
      </form>
      
    </div>
  );
};

export default DonorForm;
