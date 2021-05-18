import React from 'react';
import './Popup.css';
import CancelIcon from '@material-ui/icons/Cancel';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="close-btn" onClick={() => props.setTrigger(false)}>
          <CancelIcon />
        </div>
        <div className="popup__mid">
          <div className="covi">
            covi<span className="care">Care</span>
          </div>
          <div className="instruct">
            you need to register/ login first if you want to donate <br></br> for the secuirty
            purpose
          </div>
          <div className="googled">
            <Link to="/DonorRegistration">
              {' '}
              <Button buttonName="google" label="Google" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}

export default Popup;
