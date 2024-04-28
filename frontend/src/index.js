import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './navbar';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Tectonics from './tectonics';
import Biosphere from './biosphere';
import Atmosphere from './atmosphere';
import Temperature from './temperature';
import Jurassic from './jurassic';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/jurassic" element={<Jurassic />} />
        <Route path="/tectonics" element={<Tectonics />} />
        <Route path="/biosphere" element={<Biosphere />} />
        <Route path="/atmosphere" element={<Atmosphere />} />
        <Route path="/temperature" element={<Temperature />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
