import React from 'react';

export default function BoxAndWhisker ({ values }){
  if(!values || values.length === 0) return null;
  const sortedValues = [...values].sort((a, b) => a - b); // Clone to avoid mutating the original array
  //multiply each value by 10
  sortedValues.forEach((value, index) => {
    sortedValues[index] = value * 50;
  }
  );
  const median = sortedValues[Math.floor(sortedValues.length / 2)];
  const q1 = sortedValues[Math.floor(sortedValues.length / 4)];
  const q3 = sortedValues[Math.floor(sortedValues.length * 3 / 4)];
  const iqr = q3 - q1;
  const min = sortedValues[0];
  const max = sortedValues[values.length - 1];
  console.table({
    'Q1': q1,
    'Median': median,
    'Q3': q3,
    'IQR': iqr,
    'Minimum': min,
    'Maximum': max
  });

  // 

  // { top: `${max - q3}px`, bottom`${q1}px` }
  return (
    //this is the container. This container should have a height of the max value
    <div className=" w-20 relative flex flex-col items-center" style={{height: `${max}px`}}>
      <div className='w-full border absolute top-0 border-white'></div>
      <div className="border-2 absolute top-0 bottom-0  w-0" ></div>
      {/* this is the box. this should have a height based on the sortedValues */}
      <div className=" w-20 bg-white absolute " style={{ height: `${q3-q1}px` , bottom: `${q1}px` }} > 
      {/* median */}
        <div className="border-red-600 w-full border absolute" style={{bottom: `${median-q1}px`}}></div> 
      </div>
      <div className='w-full absolute bottom-0 border border-white'></div>
    </div>
  );
};


