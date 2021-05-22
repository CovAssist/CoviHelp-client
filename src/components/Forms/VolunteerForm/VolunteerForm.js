import React, { useState } from 'react';
import Button from '../../Button/Button';

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
      days: [],
      mobileNo: '',
      message: '',
      city: '',
      accept: 'false',
      languages: [],
      college: '',
      weekdaysTime: '',
      weekendTime: '',
      source: '',
    });
  };

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
                <label className="formfield">Current City and State *</label>
                <input
                  className="donorinput"
                  type="age"
                  name="city"
                  onChange={updateInput}
                  value={formData.city || ''}
              required
                />
              </div>
            </div>
          </div>
          <div className="form__subBox">
            {' '}
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
            <label className="formfield">Your WhatsApp enabled Mobile No. *</label>
            <input
              className="donorinput"
              type="no"
              name="mobileNo"
              onChange={updateInput}
              value={formData.mobileNo || ''}
              required
            />
          </div>
          <div className="form__subBox">
            {' '}
            <label className="formfield">College/Organisation *</label>
            <input
              className="donorinput"
              type="text"
              name="college"
              onChange={updateInput}
              value={formData.college || ''}
              required
            />
          </div>
          <div className="form__subBox">
            {' '}
            <label className="formfield">Languages you can speak *</label>
            <label className="checkboxvalue">
              <input
                type="checkbox"
                name="languages"
                onChange={updateInput}
                value={formData.languages || ''}
              />
              English
            </label>
            <label className="checkboxvalue">
              <input
                type="checkbox"
                name="languages"
                onChange={updateInput}
                value={formData.languages || ''}
              />
              Hindi
            </label>
            <label className="checkboxvalue">
              Other: 
              <input
                className='donorinput'
                type="text"
                name="languages"
                onChange={updateInput}
                value={formData.languages || ''}
              />
            </label>
          </div>
          <div className="form__subBox">
            {' '}
            <label className="formfield">Days you can volunteer *</label>
            <label className="checkboxvalue">
              <input
                type="checkbox"
                name="languages"
                onChange={updateInput}
                value={formData.languages || ''}
              />
              Sunday
            </label>
            <label className="checkboxvalue">
              <input
                type="checkbox"
                name="languages"
                onChange={updateInput}
                value={formData.languages || ''}
              />
              Monday
            </label>
            <label className="checkboxvalue">
              <input
                type="checkbox"
                name="languages"
                onChange={updateInput}
                value={formData.languages || ''}
              />
              Tuesday
            </label>
            <label className="checkboxvalue">
              <input
                type="checkbox"
                name="languages"
                onChange={updateInput}
                value={formData.languages || ''}
              />
              Wednesday
            </label>
            <label className="checkboxvalue">
              <input
                type="checkbox"
                name="languages"
                onChange={updateInput}
                value={formData.languages || ''}
              />
              Thursday
            </label>
            <label className="checkboxvalue">
              <input
                type="checkbox"
                name="languages"
                onChange={updateInput}
                value={formData.languages || ''}
              />
              Friday
            </label>
            <label className="checkboxvalue">
              <input
                type="checkbox"
                name="languages"
                onChange={updateInput}
                value={formData.languages || ''}
              />
              Saturday
            </label>
          </div>
        </div>
        <div className="greyBox">
          <div className="form__subBox">
            {' '}
            <label className="formfield">
              What has motivated you to volunteer for Covid assistance work? *
            </label>
            <textarea
              className="donorinput"
              type="text"
              name="message"
              onChange={updateInput}
              value={formData.message || ''}
              required
            ></textarea>
          </div>
        </div>
        <div className="greyBox">
          <div className="form__subBox">
            <label className="formfield">How did you come to know about us?</label>
            <textarea
              className="donorinput"
              type="text"
              name="source"
              onChange={updateInput}
              value={formData.source || ''}
            ></textarea>
          </div>
        </div>
        <div className="greyBox">
          <div classname="form__subBox">
            <p className="agreement">
              I understand that this can be a time-sensitive volunteering activity and that I intend
              to honor my commitment with full honesty.
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
