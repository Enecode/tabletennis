import React from "react";
import data from "../Tournament/Data.json";
import "../../Styles/styles.css"

function RoundOne({ value }) {
  return (
    <div className="container mt-50 ml-6">
      {data.map((item, index) => (
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
              {item.winner.firstname} {item.winner.lastname}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RoundOne;






// Path: tournament/src/Components/Tournament/RoundTwo.js
// function RoundOne({ value }) {
//   return (
//     <div className="conr">
//       {value.map((item, index) => (
//         <div key={index} >
//           <div className="cont1">
//             <div className="group-holder">
//               <div className="one"> 1
//               </div>
//               <div className="one-name">
//                 {item.challenger.firstname} {item.challenger.lastname}
//               </div>
//             </div>
//             <div className="group2-holder">
//               <div className="two">2</div>
//               <div className="two-name">{item.winner.firstname} {item.winner.lastname}
//             </div>
//           </div>
//         </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default RoundOne;
