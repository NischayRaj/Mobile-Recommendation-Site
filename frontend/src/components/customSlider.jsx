// import React, { useState } from 'react';
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';
// import '../styles/customSlider.css'; // Import CSS for custom styling

// const CustomSlider = () => {
//   const [value, setValue] = useState(5000);

//   // Define the steps
//   const marks = {
//     5000: ' ',
//     10000: ' ',
//     15000: ' ',
//     20000: ' ',
//     25000: ' ',
//     30000: ' ',
//     35000: ' ',
//     40000: ' ',
//     50000: ' ',
//     60000: ' ',
//     70000: ' ',
//     80000: ' ',
//     100000:' ',

//   };

//   const handleChange = (val) => {
//     setValue(val);
//   };

//   return (
//     <div className="slider-container">
//       <Slider
//         min={5000}
//         max={100000}
//         step={null} // Custom increments
//         value={value}
//         onChange={handleChange}
//         marks={marks} // Marks for custom increments
//         trackStyle={{ backgroundColor: 'black', height: 0 }}
//         handleStyle={{
//           borderColor: 'yellow',
//           height: 10,
//           width: 10,
//           marginLeft: 0,
//           marginTop: -4,
//           backgroundColor: 'black',
//         }}
//         railStyle={{ backgroundColor: 'black', height: 5 }}
//         dotStyle={{ backgroundColor: 'yellow', borderColor: 'yellow' }}
//         activeDotStyle={{ backgroundColor: 'yellow', borderColor: 'yellow' }}
//       />
//       <div className="value-display">Value: {value}</div>
//     </div>
//   );
// };


// export default CustomSlider;
