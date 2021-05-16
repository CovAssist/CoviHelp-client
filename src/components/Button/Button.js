import React from 'react';
import './Button.css';

function Button({ buttonName, label }) {
  return <button className={buttonName}>{label}</button>;
}

export default Button;
