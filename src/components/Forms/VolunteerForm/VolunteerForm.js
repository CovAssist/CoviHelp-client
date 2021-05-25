import React, { useState } from 'react';
import { saveVolunteer } from '../../../api';
import Button from '../../Button/Button';

const DonorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    days: '',
    contact: '',
    motivation: '',
    city: '',
    accept: 'false',
    languages: '',
    organisation: '',
    weekdaysTime: '',
    weekendTime: '',
    source: '',
  });
  const [languages, setLanguages] = useState({ English: false, Hindi: false });
  const [days, setDays] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
  });
  const updateDays = (e) => {
    setDays((prev) => ({ ...days, [e.target.name]: !prev[e.target.name] }));
  };
  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let arr = [];
    let arr1 = [];
    for (var key in languages) {
      if (languages[key] === true) {
        arr.push(key);
      }
    }
    for (var key1 in days) {
      if (days[key1] === true) {
        arr1.push(key1);
      }
    }
    if (formData.languages) {
      arr.push(formData.languages);
    }
    const body = formData;
    body.languages = arr.toString();
    body.days = arr1.toString();
    const data = await saveVolunteer(body);
    if (data.success) {
      setFormData({
        name: '',
        email: '',
        age: '',
        days: '',
        contact: '',
        motivation: '',
        city: '',
        accept: 'false',
        languages: '',
        organisation: '',
        weekdaysTime: '',
        weekendTime: '',
        source: '',
      });
      setLanguages({ English: false, Hindi: false });
      setDays({
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
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
              name="contact"
              onChange={updateInput}
              value={formData.contact || ''}
              required
            />
          </div>
          <div className="form__subBox">
            {' '}
            <label className="formfield">College/Organisation *</label>
            <input
              className="donorinput"
              type="text"
              name="organisation"
              onChange={updateInput}
              value={formData.organisation || ''}
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
                onChange={(e) => setLanguages((prev) => ({ ...languages, English: !prev.English }))}
                checked={languages.English}
              />
              English
            </label>
            <label className="checkboxvalue">
              <input
                type="checkbox"
                name="languages"
                onChange={(e) => setLanguages((prev) => ({ ...languages, Hindi: !prev.Hindi }))}
                checked={languages.Hindi}
              />
              Hindi
            </label>
            <label className="checkboxvalue">
              Other:
              <input
                className="donorinput"
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
              <input type="checkbox" name="sunday" onChange={updateDays} checked={days.sunday} />
              Sunday
            </label>
            <label className="checkboxvalue">
              <input type="checkbox" name="monday" onChange={updateDays} checked={days.monday} />
              Monday
            </label>
            <label className="checkboxvalue">
              <input type="checkbox" name="tuesday" onChange={updateDays} checked={days.tuesday} />
              Tuesday
            </label>
            <label className="checkboxvalue">
              <input
                type="checkbox"
                name="wednesday"
                onChange={updateDays}
                checked={days.wednesday}
              />
              Wednesday
            </label>
            <label className="checkboxvalue">
              <input
                type="checkbox"
                name="thursday"
                onChange={updateDays}
                checked={days.thursday}
              />
              Thursday
            </label>
            <label className="checkboxvalue">
              <input type="checkbox" name="friday" onChange={updateDays} checked={days.friday} />
              Friday
            </label>
            <label className="checkboxvalue">
              <input
                type="checkbox"
                name="saturday"
                onChange={updateDays}
                checked={days.saturday}
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
              name="motivation"
              onChange={updateInput}
              value={formData.motivation || ''}
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
              required
            />
            <label className="tnc">ACCEPT</label>
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
