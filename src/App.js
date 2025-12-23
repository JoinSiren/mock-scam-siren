import { Routes, Route } from "react-router-dom";
import MockScamTrainer from "./MockScamTrainer";
import DigitalArrest from "./DigitalArrest.jsx";
import "./App.css";

export default function App() {
  // in src/App.js
  return (
    
    <div className="App">
      <Routes> 
        <Route path="/" element={<MockScamTrainer />} />
        <Route path="/InvestmentScam" element={<MockScamTrainer />} />
        <Route path="/DigitalArrest" element={<DigitalArrest />} />
        <Route path="*" element={<MockScamTrainer />} />
      </Routes>
    </div>
  ); 
}
