import React from 'react';
import '../Button/Button.css';

const Button = ({ text, onClick, children }) => {
  return (
    <button className="transparent-button" onClick={onClick}>
      {children ? children : <span className="server__button-text">{text?.toUpperCase()}</span>}
    </button>
  );
};

export default Button;
