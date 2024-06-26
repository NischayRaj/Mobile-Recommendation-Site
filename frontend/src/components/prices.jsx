import React from 'react';
import '../styles/prices.css'
function Prices(props) {
  const buttonRows = [];

  // Create three rows of buttons
  for (let i = 0; i < 3; i++) {
    const buttons = [];
    for (let j = 0; j < 5; j++) {
      const index = i * 5 + j;
      buttons.push(
        <button key={index} className="price-button">
          Button {index + 1}
        </button>
      );
    }
    buttonRows.push(
      <div key={i} className="button-row">
        {buttons}
      </div>
    );
  }

  return (
    <div className="prices-container">
      {buttonRows}
    </div>
  );
}

export default Prices;
