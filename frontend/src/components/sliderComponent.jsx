import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import '../styles/sliderComponent.css'; // Import CSS for custom styling

const SliderComponent = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="slider-container">
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="thumb"
        trackClassName="track"
        min={0}
        max={100}
        step={5}
        value={value}
        onChange={(val) => setValue(val)}
      />
      <div className="value-display">Value: {value}</div>
    </div>
  );
};

export default SliderComponent;
