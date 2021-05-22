import React from 'react';
import './Button.css';

function Button({ buttonName, label, onClick }) {
  return (
    <button className={buttonName} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
