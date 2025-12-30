import { Routes, Route, Navigate } from "react-router-dom";
import MockScamTrainer from "./MockScamTrainer";
import DigitalArrest from "./DigitalArrest.jsx";
import "./App.css";

export default function App() {
  // in src/App.js
  return (
    
    <div className="App">
      <Routes> 
        <Route path="/" element={<Navigate to="/digitalarrest" replace />} />
        <Route path="/investmentscam" element={<MockScamTrainer />} />
        <Route path="/digitalarrest" element={<DigitalArrest />} />
        <Route path="*" element={<MockScamTrainer />} />
      </Routes>
    </div>
  ); 
}
