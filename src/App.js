import { Routes, Route, Navigate } from "react-router-dom";
import MockScamTrainer from "./MockScamTrainer";
import MockScamTrainerDA from "./MockScamTrainerDA";
import "./App.css";

export default function App() {
  // in src/App.js
  return (
    
    <div className="App">
      <Routes> 
        <Route path="/" element={<Navigate to="/digitalarrest" replace />} />
        <Route path="/investmentscam" element={<MockScamTrainer />} />
        <Route path="/digitalarrest" element={<MockScamTrainerDA />} />
      
        <Route path="*" element={<MockScamTrainer />} />
      </Routes>
    </div>
  ); 
}
