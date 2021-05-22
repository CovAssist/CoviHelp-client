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
      email: '',
      age: '',
      gender: '',
      mobileNo: '',
      message: '',
      hospital: '',
      bloodGroup: '',
      city: '',
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
        <div className="personal">Personal Information</div>
        <div className="greyBox">
          <div className="form__subBox">
            <label className="formfield">Patient Name</label>
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
                <label className="formfield">Patient Age</label>
                <input
                  className="donorinput"
                  type="age"
                  name="age"
                  onChange={updateInput}
                  value={formData.age || ''}
                />
              </div>

              <div className="common">
                <label className="formfield">Gender</label>
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
            <label className="formfield">Your Email Id</label>
            <input
              className="donorinput"
              type="email"
              name="email"
              onChange={updateInput}
              value={formData.email || ''}
            />
          </div>
          <div className="form__subBox">
            <label className="formfield">Your Mobile No.</label>
            <input
              className="donorinput"
              type="no"
              name="mobileNo"
              onChange={updateInput}
              value={formData.mobileNo || ''}
            />
          </div>
        </div>

        <p className="personal">Medical Information</p>
        <div className="greyBox">
          <div className="form__subBox">
            {' '}
            <label className="formfield">
              Name of the Hospital where you're undergoing treatment
            </label>
            <input
              className="donorinput"
              type="text"
              name="hospital"
              onChange={updateInput}
              value={formData.hospital || ''}
            />
          </div>
          <div className="form__subBox">
            <div className="ageBox">
              <div className="common">
                <label className="formfield">Your Blood group</label>
                <select className="donorinput">
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
                  className="donorinput"
                  type="text"
                  name="city"
                  onChange={updateInput}
                  value={formData.city || ''}
                />
              </div>
            </div>
          </div>
          <div className="form__subBox">
            <label className="formfield">
              SPO<sub>2</sub> level/Oxygen saturation level
            </label>
            <input
              className="donorinput"
              type="diseases"
              name="diseases"
              onChange={updateInput}
              value={formData.diseases || ''}
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
