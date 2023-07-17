import React from 'react';
import data from "../Tournament/Data.json";
import "../../Styles/styles.css"


function RoundTwo({ value }) {
  return (
    <div className="container mt-50 ml-6">
      {value.map((item, index) => (
        <div key={index} className="card bg-white p-4 mb-4">
          <div className="card flex flex-shrink-0 ml-20 border border-neutral-300 rounded-5">
            <div className="w-30 p-10 flex-shrink-0 bg-green-600 text-white font-inter text-14 font-normal font-style-normal font-weight-400 tracking-0.14">
              1
            </div>
            <div className="flex-shrink-0 p-10 text-black font-inter text-14 font-normal font-weight-500 tracking-0.14">
              {item.challenger.firstname} {item.challenger.lastname}
            </div>
          </div>
          <div className="flex flex-shrink-0 ml-20 border border-neutral-300 rounded-5">
            <div className="w-30 p-10 flex-shrink-0 bg-neutral-400 text-white font-inter text-14 font-normal font-style-normal font-weight-100 tracking-0.14">
              2
            </div>
            <div className="text-black font-inter text-14 font-normal font-weight-500 tracking-0.14 w-232 flex-shrink-0 p-10">
            {item.challenger.firstname} {item.challenger.lastname}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RoundTwo;