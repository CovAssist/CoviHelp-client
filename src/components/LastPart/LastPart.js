// eslint-disable-next-line
import React from 'react';
import './LastPart.css';
import SendIcon from '@material-ui/icons/Send';
import symptom from '../../Assests/symptoms.png';
import savelife from '../../Assests/saveLife.png';

function LastPart() {
  return (
    <div className="lastPart">
      <div className="one">
        <div className="symptoms">Symptoms of COVID-19</div>
        <div className="symp">
          <img className="symimg" src={symptom} alt="symptomsImage" />
        </div>
      </div>
      <div className="one">
        <div className="symptoms">How to save your life ?</div>
        <div className="symp">
          <img className="symimg" src={savelife} alt="symptomsImage" />
        </div>
      </div>
      <div className="one">
        <div className="symptoms">Are you affected by Corona ?</div>
        <div className="subsymp">Need Help ? Don't worry, We are always there to help you.</div>
        <div className="mailbox">
          <div className="mail">
            {' '}
            <input className="mailplace" type="text" placeholder="Enter Your Email" />
          </div>
          <div className="send">
            <SendIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastPart;
