import React from 'react';
import { BrowserRouter  as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
// import Header from "./Components/Tournament/Header";
// import RoundOne from "./Components/Tournament/RoundOne";
// import RoundTwo from "./Components/Tournament/RoundTwo";
// import RoundThree from "./Components/Tournament/RoundThree";
import Home from "./Components/Tournament/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
