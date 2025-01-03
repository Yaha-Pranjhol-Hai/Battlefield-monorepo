import React from 'react';

const Button = ({ text, onClick }) => {
  return (
    <button className="transparent-button" onClick={onClick}>
      <span className="server__button-text">{text.toUpperCase()}</span> 
    </button>
  );
};

export default Button;
