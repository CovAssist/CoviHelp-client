import React, { useState } from 'react';
import Button from '../../Button/Button';
import '../Form.css';

const PatientForm = () => {
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
      age: '',
      mobileNo: '',
      purpose: '',
      hospital: '',
      date: '',
      contactPerson: '',
      bloodGroup: '',
      city: '',
      affected: '',
      filename: '',
      accept: 'false',
    });
  };

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
        <div className="personal">Personal Information</div>
        <div className="greyBox">
          <div className="form__subBox">
            <label className="formfield">Patient Name *</label>
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
                <label className="formfield">Patient Age *</label>
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
                <label className="formfield">City and State *</label>
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
            <label className="formfield">Date *</label>
            <input
              className="donorinput"
              type="date"
              name="date"
              onChange={updateInput}
              value={formData.date || ''}
              required
            />
          </div>
          <div className="form__subBox">
            <label className="formfield">Contact Person's Name *</label>
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
            <label className="formfield">Your Email Id</label>
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
            {' '}
            <label className="formfield">
              Name of the Hospital where treatment is undergoing *
            </label>
            <input
              className="donorinput"
              type="text"
              name="hospital"
              onChange={updateInput}
              value={formData.hospital || ''}
              required
            />
          </div>
          <div className="form__subBox">
            <div className="ageBox">
              <div className="common">
                <label className="formfield">Blood group *</label>
                <select className="donorinput" required>
                  {bloodGroup.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="common">
                <label className="formfield">Purpose *</label>
                <input
                  className="donorinput"
                  type="text"
                  name="purpose"
                  onChange={updateInput}
                  value={formData.purpose || ''}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form__subBox">
            <label className="formfield">Covid/Non-Covid *</label>
            <label className="checkboxvalue">
              <input
                type="radio"
                name="affected"
                onChange={updateInput}
                value={formData.affected || ''}
                required
              />
              Covid
            </label>
            <label className="checkboxvalue">
              <input
                type="radio"
                name="affected"
                onChange={updateInput}
                value={formData.affected || ''}
              />
              Non-Covid
            </label>
          </div>
          <div className="form__subBox">
            {' '}
            <label className="formfield">Doctor's Prescription *</label>
            <input 
            className="addFile" 
            type="file" 
            id="myFile" 
            name="filename" 
            onChange={updateInput}
            value={formData.filename || ''}
            />
          </div>
        </div>

        <div className="form__submit">
          <Button buttonName="submit" label="Submit" />
        </div>
      </form>
    </div>
  );
};

export default PatientForm;
