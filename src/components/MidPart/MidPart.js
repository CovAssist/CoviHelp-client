import React from 'react';
import illustrate from '../../Assests/clip-covid-19-test-result.png';
import './MidPart.css';
import Button from '../Button/Button';

function MidPart() {
  return (
    <div className="midPart">
      {/* <div className="bg2"></div> */}
      <div className="state">188+ countries get affected by Corona</div>
      <div className="boxex">
        {' '}
        <div className="box">
          <div className="intotalCasen">3,24,567+</div>
          <div className="intotalCase">Total Recover</div>
        </div>
        <div className="box">
          <div className="intotalRecovern">3,24,567+</div>
          <div className="intotalRecover">Total Recover</div>
        </div>
      </div>
      <div className="regis">
        <div className="regisButton">
          <Button buttonName="registerp" label="Patient Registration" />
          <Button buttonName="registerv" label="Volunteer Registration" />
        </div>
        <div className="illus">
          <img className="illust" src={illustrate} alt="illsut" />
        </div>
      </div>
    </div>
  );
}

export default MidPart;
