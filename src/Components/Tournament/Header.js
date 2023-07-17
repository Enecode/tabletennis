import React, { useState } from "react";
import RoundOne from "./RoundOne";
import RoundTwo from "./RoundTwo";
import RoundThree from "./RoundThree";
import data from "./Data.json";

function Header() {
  const [selectedRound, setSelectedRound] = useState(1);

  const handleRoundSelection = (roundNumber) => {
    setSelectedRound(roundNumber);
  };

  const handleNext = () => {
    setSelectedRound((prevRound) => prevRound + 1);
  };

  const renderRoundComponent = () => {
    if (selectedRound === 1) {
      return <RoundOne value={data} />;
    } else if (selectedRound === 2) {
      return <RoundTwo value={data} />;
    } else if (selectedRound === 3) {
      return <RoundThree value={data} />;
    }
    return null;
  };

  return (
    <>
      <header className="p-4 shadow-sm">
        <div className="inline-block text-lg">
          <h1>Round {selectedRound}</h1>
        </div>
        <div className="inline-block top-auto text-teal-800 float-right rounded-full mx-1 px-2">
          <button onClick={() => handleRoundSelection(3)}>3</button>
        </div>
        <div className="inline-block top-auto text-teal-800 float-right rounded-full mx-1 px-2">
          <button onClick={() => handleRoundSelection(2)}>2</button>
        </div>
        <div className="font-inter text-base font-medium leading-normal tracking-tight inline-block top-auto text-teal-800 float-right rounded-full mx-1 px-2">
          <button onClick={() => handleRoundSelection(1)}>1</button>
        </div>
      </header>

      {renderRoundComponent()}
      <div className="flex-shrink-0 ml-20 border border-neutral-300 rounded-5">
        <button className="justify-center items-center gap-1 flex-shrink-0 rounded-56 bg-green-300 shadow-button" onClick={handleNext} >Proceed to Round {selectedRound}</button>
      </div>  
    </>
  );
}

export default Header;
