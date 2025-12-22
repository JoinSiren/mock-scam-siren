import { Routes, Route } from "react-router-dom";
import MockScamTrainer from "./MockScamTrainer";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<MockScamTrainer />} />
        <Route path="/InvestmentScam" element={<MockScamTrainer />} />
        
      </Routes>
    </div>
  ); 
}
