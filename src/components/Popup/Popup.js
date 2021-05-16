import React from 'react';
import './Popup.css';
import CancelIcon from '@material-ui/icons/Cancel';

function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="close-btn" onClick={() => props.setTrigger(false)}>
          <CancelIcon />
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  );
}

export default Popup;
