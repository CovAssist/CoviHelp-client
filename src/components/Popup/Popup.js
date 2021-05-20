import React from 'react';
import { useState } from 'react';
import './Popup.css';
import CancelIcon from '@material-ui/icons/Cancel';
import { Link, useHistory } from 'react-router-dom';
import Button from '../Button/Button';
import { auth, provider } from '../../firebase';

function Popup(props) {
  const history = useHistory();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        history.push('/DonorRegistration');
        props.setLogin(true);
        console.log(props.login);
      })
      .catch((error) => alert(error.message));
  };
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
            you need to register/ login first if you want to donate for the secuirty purpose
          </div>
          <div className="googled" onClick={signIn}>
            <Button buttonName="google" label="Google" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}

export default Popup;
